# FasalCare 🌾

**Your AI Farming Assistant.** A Progressive Web App (PWA) providing farmers with AI-powered tools for crop management, disease detection, and market insights. **Powered by MERN Stack & Python AI.**

![Build Status](https://img.shields.io/badge/build-verified-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![PWA](https://img.shields.io/badge/PWA-Ready-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

## About The Project

FasalCare (formerly AgriMitra) is a comprehensive, AI-powered platform designed for modern farmers. It combines machine learning with essential agricultural data to serve as a one-stop digital assistant.

---

### Key Features

*   **📅 AI Smart Calendar:** Personalized farming schedules.
*   **📸 Visual AI Assistant:** Multimodal chatbot (Voice + Text + Image).
*   **👥 Kisan Forum:** Community space for farmers.
*   **🌿 Plant Diagnosis:** Instant disease identification using MobileNetV2.
*   **☀️ Weather Dashboard:** Real-time forecasts.
*   **📈 Market Insights:** Track mandi prices.
*   **📱 PWA Support:** Installable on mobile devices (Offline capabilities).
*   **🗣️ Trilingual Support:** English, Gujarati (ગુજરાતી), and Hindi (हिंदी).

---

### Built With

This project is built with a modern, full-stack technology set (**MERN**):

*   [React](https://reactjs.org/) (Vite + PWA)
*   [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
*   [MongoDB](https://www.mongodb.com/)
*   [Python](https://www.python.org/) & [FastAPI](https://fastapi.tiangolo.com/) (ML Service)
*   [Tailwind CSS](https://tailwindcss.com/)

## Project Structure

```
FasalCare/
├── client/                     # Frontend (React + Vite + PWA)
│   ├── src/
│   │   ├── pages/              # Application Pages
│   │   ├── components/         # Reusable UI Components
│   │   └── ...
├── server/                     # Backend (Node.js + Express)
│   ├── src/
│   │   ├── models/             # Mongoose Models
│   │   ├── routes/             # API Routes
│   │   └── ...
└── ml-service/                 # AI Service (Python + FastAPI)
    ├── main.py                 # ML Entry Point
    └── ...
```

---

## Getting Started

### Prerequisites
*   Node.js (v18+)
*   Python (v3.10+)
*   MongoDB

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/deepaksinghh12/FasalCare.git
    cd FasalCare
    ```

2.  **Install Dependencies**
    *   **Frontend**: `cd client && npm install`
    *   **Backend**: `cd server && npm install`
    *   **ML Service**: `cd ml-service && pip install -r requirements.txt`

3.  **Run the Application**
    *   **Backend**: `cd server && npm run dev` (Runs on port 5000)
    *   **ML Service**: `cd ml-service && uvicorn main:app --reload` (Runs on port 8000)
    *   **Frontend**: `cd client && npm run dev` (Runs on port 5173)

open [http://localhost:5173](http://localhost:5173) to view it in the browser.

