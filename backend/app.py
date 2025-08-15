from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS to handle cross-origin requests
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # This allows the frontend to connect from different domains

# Load your trained model
# Ensure the model file is saved as 'model.pkl' or update the path if needed
model = joblib.load('model.pkl')  # Update this path if necessary

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from the incoming POST request
        data = request.get_json()

        # Check if the 'features' key exists in the incoming data
        if 'features' not in data:
            return jsonify({'error': 'Missing "features" in the request'}), 400
        
        # Extract the features from the incoming JSON and ensure it's in the correct shape
        features = np.array(data['features']).reshape(1, -1)  # Reshape to match model input

        # Make prediction
        prediction = model.predict(features)

        # Return the prediction as a JSON response
        return jsonify({'prediction': prediction.tolist()})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
