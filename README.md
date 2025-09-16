# devops-mern-todo

A full-stack MERN Todo List application with DevOps best practices, CI/CD, and AWS deployment.

## Features

- Task management (create, edit, delete, list)
- RESTful API backend (Node.js, Express, MongoDB)
- Responsive React frontend (Vite)
- Dockerized services (frontend, backend, MongoDB)
- Automated CI/CD with GitHub Actions
- Deployment on AWS EC2

## Technologies Used

React.js, Node.js, Express.js, MongoDB, Docker, Docker Compose, GitHub Actions, AWS EC2, Vite, ESLint

## Setup & Deployment Steps

### 1. Clone the Repository

```sh
git clone https://github.com/Nithish-ponnusamy/devops-mern-todo.git
cd devops-mern-todo
```

### 2. Configure Environment Variables

- Create `.env.prod` files in `backend/` and `frontend/` with required variables (see sample `.env` files if provided).

### 3. Run Locally with Docker Compose

```sh
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:8080 (container port 27017)

### 4. Run Tests

- Backend: `docker exec -it backend npm test`
- Frontend: `docker exec -it frontend npm test`

### 5. CI/CD Pipeline (GitHub Actions)

- On push to `main`, CI workflow runs tests and seeds MongoDB.
- On push to `main`, CD workflow deploys to AWS EC2 via SSH, pulls latest code, and restarts Docker containers.

### 6. Deploy to AWS EC2

- Ensure your EC2 instance has Docker and docker-compose installed.
- Add your EC2 SSH key and connection details as GitHub repository secrets:
  - `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY`
- On push to `main`, deployment is triggered automatically.

---

For more details, see workflow files in `.github/workflows/` and Dockerfiles in `backend/` and `frontend/`.
