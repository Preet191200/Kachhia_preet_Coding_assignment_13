# Kachhia_Preet_Coding_Assignment13

## Assignment 13 — UC Component Library with Build Checks

### Overview
This project is a React + TypeScript component library with full code quality checks including ESLint, Prettier, Husky pre-commit hooks, and GitHub Actions CI/CD pipeline.

---

## Running with Docker

### Prerequisites
- Docker installed on your machine

### Steps

1. Clone the repository
```bash
git clone https://github.com/Preet191200/Kachhia_preet_Coding_assignment_13.git
cd Kachhia_preet_Coding_assignment_13
```

2. Build the Docker image
```bash
docker build -t kachhia_preet_coding_assignment13 .
```

3. Run the container
```bash
docker run -p 8018:8018 --name kachhia_preet_coding_assignment13 kachhia_preet_coding_assignment13
```

4. Open in browser
```
http://localhost:8018
```

---

## Pre-commit Hooks (Husky)

Before every git commit, the following checks run automatically:
- Prettier formatting check
- ESLint code quality check
- All unit tests

If any check fails, the commit is blocked.

---

## CI/CD Pipeline (GitHub Actions)

Every push and pull request to main triggers the same checks via GitHub Actions:
- Prettier formatting check
- ESLint code quality check
- All unit tests
- Production build

The workflow file is located at .github/workflows/ci.yml

---

## Available Scripts

| Script | Description |
|--------|-------------|
| npm start | Runs the app in development mode |
| npm test | Runs all tests |
| npm run build | Builds the app for production |
| npm run lint | Runs ESLint |
| npm run format | Formats code with Prettier |
| npm run format:check | Checks formatting without writing |
