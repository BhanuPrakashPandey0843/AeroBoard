# AeroBoard

**Live Demo**: [https://aero-board.netlify.app/home](https://aero-board.netlify.app/home)


## Overview

**AeroBoard** is an advanced gesture-based human-computer interaction system that replaces traditional input devices like the mouse and keyboard with real-time hand gestures. It enables touchless control over digital interfaces and offers three primary functionalities:

* **Virtual Mouse** – Control cursor movement and click actions using hand gestures.
* **Virtual Keyboard** – Type text by performing gestures on a virtual layout.
* **Air Canvas** – Draw or annotate in real-time using hand motions.

This system is designed to improve accessibility and usability in environments where physical interaction is limited or undesirable—such as healthcare facilities, cleanrooms, or immersive AR/VR setups.

---

## Features

* Real-time hand tracking and gesture recognition.
* Touch-free operation for mouse, keyboard, and drawing input.
* Clean and responsive UI developed in React with Vite.
* Python-based backend using OpenCV and MediaPipe.
* Integration with PyAutoGUI for gesture-to-system command conversion.
* Lightweight, no external hardware required—only a webcam.

---

## Technologies Used

### Frontend

* **React (Vite)**
* **Tailwind CSS** for styling
* **WebSocket/REST API integration**
* Located in the `ntcc/` folder

### Backend

* **Python 3**
* **OpenCV** – For video capture and image processing
* **MediaPipe** – For real-time hand landmark detection
* **PyAutoGUI** – For simulating system-level input events
* Located in the `backend/` folder

---



## Installation & Setup

### Prerequisites

* Python 3.8+
* Node.js and npm
* Webcam

### 1. Clone the Repository

```bash
git clone https://github.com/BhanuPrakashPandey0843/AeroBoard.git
cd AeroBoard
```

### 2. Set Up the Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

> Ensure the webcam is connected. This script starts real-time hand tracking and gesture recognition.

### 3. Set Up the Frontend

```bash
cd ../ntcc
npm install
npm run dev
```

Open the frontend at `http://localhost:5173` and grant webcam permissions.

---

## How It Works

1. The backend captures video using OpenCV.
2. MediaPipe detects hand landmarks in real-time.
3. Gestures are mapped to actions (e.g., click, draw, type).
4. PyAutoGUI executes those actions at the system level.
5. The frontend visualizes inputs and provides UI components like keyboard and canvas.

---

## Demonstration

Visit the [Live Site](https://aero-board.netlify.app/home) for a working demo.
Refer to the following files for a deeper understanding:

* `AeroBoard_Documentation.pdf`: Full technical documentation
* `AeroBoard_PPT.pptx`: Presentation deck

---

## Applications

* **Accessibility**: Helps users with physical disabilities interact with computers.
* **Healthcare**: Useful in sterile or hands-free environments.
* **Education**: Enables live drawing, annotation, and teaching aids.
* **VR/AR**: Provides natural gesture-based interaction.
* **Remote Collaboration**: Facilitates pointer and annotation control during video calls or demos.

---

## Future Enhancements

* Improve gesture accuracy under variable lighting conditions.
* Expand gesture vocabulary (e.g., scroll, zoom, multi-hand gestures).
* Add user-configurable gesture mappings.
* Enhance drawing smoothness with interpolation and filters.
* Mobile and wearable compatibility (e.g., smart glasses).
* Explore integration with VR/AR platforms.
* Add gesture calibration UI for better adaptability.

---

## Known Limitations

* Accuracy may degrade in low-light or cluttered backgrounds.
* Not yet optimized for mobile or multi-hand gestures.
* Requires proper hand positioning in webcam field of view.

---

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch.
3. Make your improvements.
4. Submit a pull request with proper description.

---


## Contact

For queries or collaboration opportunities:

* **Developer**: Bhanu Prakash Pandey
* **GitHub**: [BhanuPrakashPandey0843](https://github.com/BhanuPrakashPandey0843)
* **Live Project**: [https://aero-board.netlify.app/home](https://aero-board.netlify.app/home)

