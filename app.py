from flask import Flask, render_template, Response, jsonify, request
import cv2
import numpy as np
from sign_language_interpreter import SignLanguageInterpreter
import base64

app = Flask(__name__)
interpreter = SignLanguageInterpreter()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/capture_sign', methods=['POST'])
def capture_sign():
    data = request.json
    sign_name = data.get('sign_name')
    frame_data = data.get('frame')
    
    # Convert base64 image to OpenCV format
    frame_bytes = base64.b64decode(frame_data.split(',')[1])
    frame_arr = np.frombuffer(frame_bytes, np.uint8)
    frame = cv2.imdecode(frame_arr, cv2.IMREAD_COLOR)
    
    # Process and save frame
    processed = interpreter.process_frame(frame)
    roi = processed[100:300, 100:300]
    
    # Save to signs dictionary
    interpreter.signs[sign_name] = roi
    
    return jsonify({'status': 'success'})

@app.route('/recognize_sign', methods=['POST'])
def recognize_sign():
    data = request.json
    frame_data = data.get('frame')
    
    # Convert base64 image to OpenCV format
    frame_bytes = base64.b64decode(frame_data.split(',')[1])
    frame_arr = np.frombuffer(frame_bytes, np.uint8)
    frame = cv2.imdecode(frame_arr, cv2.IMREAD_COLOR)
    
    # Process frame and match sign
    processed = interpreter.process_frame(frame)
    matched_sign, score = interpreter.match_sign(processed)
    
    return jsonify({
        'sign': matched_sign,
        'score': float(score) if score is not None else None
    })

if __name__ == '__main__':
    app.run(debug=True) 