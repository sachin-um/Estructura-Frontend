from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import cv2
import numpy as np
from tensorflow.keras.models import load_model
from PIL import Image

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing to allow requests from the React frontend

UPLOAD_FOLDER = '../public/upload_interior_images'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load the trained model
model = load_model('interior_type_model.h5')

# List of interior types
interior_types = ['bohemian', 'coastal', 'industrial', 'scandinavian']

# Function to preprocess the image
def preprocess_image(image_path, image_size):
    img = Image.open(image_path)
    img = img.convert('RGB')
    img = img.resize(image_size)
    img_array = np.array(img)
    img_array = img_array.astype(np.float32) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

@app.route('/api/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image part in the request'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected image'}), 400

    if file:
        # Save the file with the name "interior_img.jpg"
        filename = "interior_img.jpg"
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)

        # Delete the existing file if it already exists
        if os.path.exists(file_path):
            os.remove(file_path)

        file.save(file_path)

        return jsonify({'message': 'File uploaded successfully'}), 200

    return jsonify({'error': 'Error uploading file'}), 500

@app.route('/api/predict', methods=['GET'])
def predict_image():
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], 'interior_img.jpg')
    
    # Preprocess the test image
    test_image = preprocess_image(image_path, (224, 224))

    # Make prediction
    prediction = model.predict(test_image)
    predicted_class = np.argmax(prediction, axis=1)[0]
    predicted_type = interior_types[predicted_class]

    # Get probabilities for all interior types
    probabilities = prediction[0]

    # Return prediction result as response
    return jsonify({
        'predicted_type': predicted_type,
        'probabilities': {interior_types[i]: float(probabilities[i]) for i in range(len(interior_types))}
    }), 200

if __name__ == '__main__':
    app.run()
