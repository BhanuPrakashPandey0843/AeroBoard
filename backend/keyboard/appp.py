from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

@app.route('/run-script', methods=['POST'])
def run_script():
    try:
        # Ensure virtual_keyboard.py is in the same directory or provide the absolute path.
        subprocess.Popen(['python', 'virtual_keyboard.py'])
        return jsonify({"message": "Script is running!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
