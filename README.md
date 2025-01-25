
# Secure PDF Viewer

A secure PDF viewer application built using React.js for the frontend and Node.js for the backend. This project allows users to view PDFs securely, with features like disabling right-click and screenshot detection.

---

## **Project Features**
- Securely host and view PDFs using Node.js and React.js.
- Disable right-click and screenshot keys (PrintScreen, Ctrl + PrintScreen).
- Display a PDF viewer powered by PDF.js via `@react-pdf-viewer/core`.
- Frontend and backend run on separate servers.

---

## **Technologies Used**
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **PDF Rendering**: PDF.js (`@react-pdf-viewer/core` and `pdfjs-dist`)

---

## **Prerequisites**
Ensure you have the following installed:
1. **Node.js** (v16 or later recommended): [Download here](https://nodejs.org/)
2. **npm** (comes with Node.js)
3. **Git**: [Download here](https://git-scm.com/)

---

## **Steps to Execute the Project**

### **1. Clone the Repository**
Clone the project from the GitHub repository:
```bash
git clone https://github.com/<username>/secure-pdf-viewer.git
cd secure-pdf-viewer
```

---

### **2. Backend Setup**

#### Navigate to the `backend` directory:
```bash
cd backend
```

#### Install Dependencies:
```bash
npm install
```

#### Start the Backend Server:
```bash
node server.js
```

The backend server will run on `http://localhost:5000` by default.

---

### **3. Frontend Setup**

#### Navigate to the `frontend` directory:
```bash
cd ../frontend
```

#### Install Dependencies:
```bash
npm install
```

#### Start the Frontend Server:
```bash
npm start
```

The frontend server will run on `http://localhost:3000` by default.

---

## **Running the Project**

1. Start the backend server:
   ```bash
   cd backend
   node server.js
   ```

2. Start the frontend server:
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to:
   ```plaintext
   http://localhost:3000
   ```



## **API Endpoints**

### **1. List Available PDFs**
**GET** `http://localhost:5000/api/pdfs`
- Returns a list of PDF files available in the backend `pdfs/` directory.

---
### Issue: Modules not found
- Reinstall dependencies for both backend and frontend:
  ```bash
  cd backend
  npm install
  cd ../frontend
  npm install
  ```
---