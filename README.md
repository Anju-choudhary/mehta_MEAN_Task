# MEAN Stack Project

This project is a MEAN stack application which includes postgresSql, Express.js, Angular, and Node.js.

## Prerequisites

Make sure you have the following installed on your system:
- Node.js
- npm (Node package manager)
- Angular CLI
- postgreSql db

## Getting Started

Follow these instructions to set up the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/Anju-choudhary/mehta_MEAN_Task.git
cd mehta_MEAN_Task
```

### 2. Setup backend
```bash
cd backend
npm install
node app
```

### 3. make sure you use your database and password in db/conn
Here "postgres://postgres:Anju@1234@localhost:5432/testDb" use your databse and password
example for general -- "postgres://YourUserName:YourPassword@localhost:5432/YourDatabase"


### 4. Setup frontend
```bash
cd ../frontend
npm install
ng add @angular/material
ng build
ng serve
```

### 5. Running the Application

With both servers running, you can access the application by opening your browser and navigating to `http://localhost:4200`