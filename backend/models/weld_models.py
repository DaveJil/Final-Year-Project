# backend/models/weld_models.py

from ultralytics import YOLO
from PIL import Image

# Load the trained model once (on app start)
model = YOLO("runs/train/exp3/weights/best.pt")

def predict_defect(image_file):
    # Read image from Flask file stream
    image = Image.open(image_file.stream)

    # Run YOLO detection
    results = model(image)

    predictions = []
    for box in results[0].boxes:
        cls_id = int(box.cls)
        conf = float(box.conf)
        class_name = results[0].names[cls_id]

        predictions.append({
            "defect": class_name,
            "confidence": round(conf * 100, 2)
        })

    return predictions

