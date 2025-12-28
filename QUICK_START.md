# 🚀 Quick Start Guide

## How to Run the Portfolio Website

### Prerequisites
Make sure you have **Node.js** installed on your system.
- Download from: https://nodejs.org/
- Recommended: LTS version (v18 or higher)

### Step 1: Install Dependencies
Open your terminal (PowerShell or Command Prompt) in the project directory and run:

```bash
npm install
```

This will install all required packages (React, Bootstrap, etc.)

### Step 2: Start the Development Server
Once installation is complete, run:

```bash
npm start
```

This will:
- Start the development server
- Automatically open your browser at `http://localhost:3000`
- Enable hot-reload (changes will refresh automatically)

### Step 3: View Your Portfolio
Your portfolio will be available at:
- **Local URL**: http://localhost:3000
- The browser should open automatically

### Stop the Server
Press `Ctrl + C` in the terminal to stop the development server.

---

## Other Useful Commands

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

### Run Tests
```bash
npm test
```

---

## Troubleshooting

### If `npm install` fails:
- Make sure Node.js is installed: `node --version`
- Try clearing npm cache: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

### If port 3000 is already in use:
- The terminal will ask if you want to use a different port (usually 3001)
- Type `Y` to confirm

### If you see errors:
- Make sure you're in the correct directory: `cd C:\Users\ACER\Desktop\protfolio`
- Check that all files are present in the `src` folder

---

## Need Help?
Check the main README.md for more detailed information about customization and deployment.

