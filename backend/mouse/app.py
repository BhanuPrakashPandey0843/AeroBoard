from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

# Route to run the virtual mouse script
@app.route('/run-mouse-script', methods=['POST'])
def run_mouse_script():
    try:
        subprocess.Popen(['python', 'main.py'])  # Your virtual mouse script
        return jsonify({"message": "Mouse script is running!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to run the virtual keyboard script
@app.route('/run-keyboard-script', methods=['POST'])
def run_keyboard_script():
    try:
        subprocess.Popen(['python', 'virtual_keyboard.py'])  # Your virtual keyboard script
        return jsonify({"message": "Keyboard script is running!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to run the canvas script
@app.route('/run-canvas-script', methods=['POST'])
def run_canvas_script():
    try:
        subprocess.Popen(['python', 'air_canvas.py'])  # Your virtual canvas script
        return jsonify({"message": "Canvas script is running!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
