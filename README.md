# Inha LMS - Electron Desktop App

This project is a hybrid desktop application built with **React** and **Electron**.

## Prerequisites

1. **Node.js**: Required to run both React and Electron.

## How to Run

### Option 1: Development Mode (Recommended)
You need two terminals.

1.  **Terminal 1 (React Server)**:
    ```bash
    npm start
    ```
    *Wait for the server to start at http://localhost:8080*

2.  **Terminal 2 (Electron Client)**:
    ```bash
    npm install
    npm run electron
    ```

### Project Structure
- `main.js`: The Electron main process that creates the native window.
- `index.tsx` & `App.tsx`: The React application entry points.
- `pages/`: Application views (Dashboard, Attendance, Timetable, etc.).

## Features
- **Hybrid Architecture**: Runs as a web app and a native desktop app.
- **Role-Based Access**: Student, Professor, Academic Affairs, SysAdmin.
- **Fingerprint Verification**: Simulated biometric auth for attendance.
- **Timetable Management**: Editable grid for Academic Affairs.
