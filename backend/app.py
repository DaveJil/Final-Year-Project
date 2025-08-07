# backend/app.py

from flask import Flask
from backend.routes.weld_routes import weld_bp

app = Flask(__name__)
app.register_blueprint(weld_bp)
