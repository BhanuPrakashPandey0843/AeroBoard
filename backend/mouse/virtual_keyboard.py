import cv2
from cvzone.HandTrackingModule import HandDetector
import time
import cvzone
import numpy as np
from pynput.keyboard import Controller, Key
import pyttsx3  
cap = cv2.VideoCapture(0)
cap.set(3, 1280)
cap.set(4, 720)
detector = HandDetector(detectionCon=0.8)
keyboard = Controller()
tts_engine = pyttsx3.init()

# Text and suggestions
finalText = ""
suggestions = ["Hello", "How", "Are", "You", "Doing"]

# Function to play click sound
def play_click_sound():
    tts_engine.say("click")
    tts_engine.runAndWait()

# Button class with added color pulse feature
class Button:
    def __init__(self, pos, text, size=[85, 85]):
        self.pos = pos
        self.size = size
        self.text = text
        self.pressed_time = 0  # Track time of press for pulsing effect

# Define keyboard layout
keys = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']]
opkeys = ['Back', 'Enter', 'Space']

# Create list of buttons
buttonList = [Button([100 * x + 50, 100 * i + 50], key) for i, row in enumerate(keys) for x, key in enumerate(row)]
buttonList += [Button([100 * (len(keys[i])) + 50, 100 * i + 50], opkeys[i]) for i in range(len(opkeys))]

# Draw function with pulsing effect and suggestions
def drawAll(img, buttonList, suggestions):
    imgNew = np.zeros_like(img, np.uint8)
    for button in buttonList:
        x, y = button.pos
        elapsed = time.time() - button.pressed_time
        color = (255, 100, 50) if elapsed < 0.1 else (100, 0, 250)
        
        # Draw buttons
        cvzone.cornerRect(imgNew, (x, y, button.size[0], button.size[1]), 20, rt=0)
        cv2.rectangle(imgNew, (x, y), (x + button.size[0], y + button.size[1]), color, cv2.FILLED)
        cv2.putText(imgNew, button.text, (x + 20, y + 60), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)
    
    # Overlay suggestions above text display
    for i, word in enumerate(suggestions):
        cv2.putText(img, word, (60 + i * 100, 480), cv2.FONT_HERSHEY_PLAIN, 2, (200, 200, 255), 3)
    return cv2.addWeighted(img, 0.7, imgNew, 0.3, 0)

# Main loop
while True:
    success, img = cap.read()
    img = cv2.flip(img, 1)
    hands, img = detector.findHands(img, draw=True)

    img = drawAll(img, buttonList, suggestions)
    if hands:
        hand = hands[0]
        lmlist = hand["lmList"]

        for button in buttonList:
            x, y = button.pos
            w, h = button.size

            if x < lmlist[8][0] < x + w and y < lmlist[8][1] < y + h:
                cv2.rectangle(img, (x - 10, y - 10), (x + w + 10, y + h + 10), (75, 0, 130), cv2.FILLED)
                cv2.putText(img, button.text, (x + 20, y + 65), cv2.FONT_HERSHEY_PLAIN, 4, (255, 255, 255), 4)
                
                if time.time() - button.pressed_time > 0.3:
                    button.pressed_time = time.time()
                    play_click_sound()
                    if button.text == 'Space':
                        finalText += ' '
                    elif button.text == 'Enter':
                        finalText += '\n'
                    elif button.text == 'Back':
                        finalText = finalText[:-1] if finalText else finalText
                    else:
                        finalText += button.text

    # Display typed text
    cv2.rectangle(img, (50, 500), (700, 600), (0, 0, 0), cv2.FILLED)
    cv2.putText(img, finalText, (60, 580), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)
    
    cv2.imshow("Virtual Keyboard", img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
