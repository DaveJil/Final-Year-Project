# ml_pipeline/preprocess.py

import os
import cv2

input_path = "data/raw"
output_path = "data/processed"
img_size = (224, 224)

for cls in os.listdir(input_path):
    input_cls_path = os.path.join(input_path, cls)
    output_cls_path = os.path.join(output_path, cls)
    os.makedirs(output_cls_path, exist_ok=True)

    for img_name in os.listdir(input_cls_path):
        img_path = os.path.join(input_cls_path, img_name)
        try:
            img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
            img = cv2.resize(img, img_size)
            save_path = os.path.join(output_cls_path, img_name)
            cv2.imwrite(save_path, img)
        except:
            print(f"Error with {img_path}")
