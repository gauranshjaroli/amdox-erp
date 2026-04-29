# Amdox ERP

A complete ERP solution built with MERN stack.

## Overview
Amdox ERP is designed to streamline and enhance the efficiency of business operations through automation and real-time data insights. It integrates various business processes into a single system for easier management.

## Setup Steps
1. Clone the repository: `git clone https://github.com/gauranshjaroli/amdox-erp.git`
2. Navigate to the project folder: `cd amdox-erp`
3. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```
4. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```
5. Run the application:
   ```bash
   # For frontend
   npm run dev
   
   # For backend
   npm start
   ```

## Team Branch Workflow
- Each feature should be developed in a separate branch following the naming convention `feature/{feature-name}`.
- Pull requests should be raised against the `main` branch for review.
- Ensure all tests pass and the application builds successfully before merging.

## Tech Stack
- Frontend: React, Vite, TypeScript
- Backend: Express, TypeScript
- Database: MongoDB 
- Containerization: Docker
