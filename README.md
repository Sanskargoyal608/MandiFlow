# MandiFlow Management System

## Overview
MandiFlow is a management system designed to facilitate the buying and selling of garlic and other agricultural products. It provides functionalities to manage farmer purchases, sales, commissions, and more.

## Tech Stack
- **Frontend**: React + Vite
- **Backend**: Django + Python
- **Database**: SQLite (default with Django)

## Getting Started

### Prerequisites
- Python 3.x
- Node.js (with npm)
- pip (Python package installer)

### Installation

#### Clone the Repository
First, clone the repository to your local machine:

```bash
gittps://github.com/sanskargoyal608/MandiFlow.git
cd MandiFlow
```
### Set Up the Backend

- **Navigate to the backend directory:**

```bash
cd mybackend
```
### Install required packages:
```bash
pip install -r requirements.txt
Run migrations:
```


```bash
python manage.py migrate
```

### Create a superuser (for admin access):


```bash
python manage.py createsuperuser
Run the Django server:
```

### Run the server
```bash
python manage.py runserver
The backend will be running at http://127.0.0.1:8000/api/.
```

### Set Up the Frontend

- **Navigate to the frontend directory:**

```bash
cd ../myfrontend  
```

-**Install dependencies:**


```bash
npm install
```

-**Run the Vite development server:**


```bash
npm run dev
```

### The frontend will be accessible at http://localhost:5173/.