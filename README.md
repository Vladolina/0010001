# Inha LMS - Hybrid Desktop App

This project consists of a React frontend and a Python (PyQt6) desktop wrapper.

## Prerequisites

1. **Node.js**: To run the frontend.
2. **Python 3.10+**: To run the desktop container.

## How to Run

You need two terminal windows open.

### Step 1: Start the React Frontend
In the first terminal, start the development server. This serves the UI.

```bash
npm start
```
*Note: Wait until it says "Compiled successfully" and tells you the port (usually localhost:8080).*

### Step 2: Start the Python Desktop Client
In the second terminal, install the python requirements and launch the app.

```bash
pip install -r requirements.txt
python main.py
```

## Features
- The `main.py` script creates a native window using `QWebEngineView`.
- It loads the URL `http://localhost:8080`.
- Inside the app, you can switch roles (Student, Professor, Admin) using the floating button in the bottom right corner.
- **SysAdmin View**: Shows a terminal-like SQL interface.
- **Inbox**: Includes Gemini AI integration for drafting emails.
