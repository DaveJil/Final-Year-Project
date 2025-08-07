from flask import Blueprint, request, jsonify
from backend.models.weld_models import predict_defect

weld_bp = Blueprint('weld_bp', __name__)

@weld_bp.route("/predict", methods=["POST"])
def predict_route():
    if 'file' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image_file = request.files['file']
    predictions = predict_defect(image_file)

    return jsonify({
        "predictions": predictions
    })

