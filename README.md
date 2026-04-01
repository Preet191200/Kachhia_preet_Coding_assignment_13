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
-----------------------------------------------------------------------------------------

Here is a complete demo script you can follow step by step:

Part 1 — Break Prettier and show Husky blocks the commit
Open src/App.tsx and add bad formatting — extra spaces and wrong quotes:

--------------------bash
python3 << 'EOF'
with open('src/App.tsx', 'r') as f:
    content = f.read()

broken = content.replace("'", '"', 1)
broken = "const x=1\n" + broken

with open('src/App.tsx', 'w') as f:
    f.write(broken)

print('Done')
EOF
----------------------
Now try to commit — Husky should block it:
bash
git add .
git commit -m "demo: intentionally broken prettier"
You should see Prettier fail and the commit get blocked. Show this to the instructor.

Part 2 — Push the broken code anyway using --no-verify to bypass Husky
bash
git push origin main --no-verify
```

Wait 2 minutes then go to:
```
https://github.com/Preet191200/Kachhia_preet_Coding_assignment_13/actions
Show the instructor the red X — GitHub Actions caught it even though Husky was bypassed.

Part 3 — Fix the code and show everything passes
Fix the file:
bash
npm run format
npm run lint
npm test
All three should pass cleanly. Show the output to the instructor.

Part 4 — Commit and push the fix
bash
git add .
git commit -m "fix: restore correct formatting"
git push origin main
Wait 2 minutes and show the green checkmark in GitHub Actions.

Part 5 — Run Docker and show the app at localhost:8018
bash# Stop any existing container first
docker stop kachhia_preet_coding_assignment13
docker rm kachhia_preet_coding_assignment13

# Build and run
docker build -t kachhia_preet_coding_assignment13 .
docker run -p 8018:8018 --name kachhia_preet_coding_assignment13 kachhia_preet_coding_assignment13
Then open the browser and go to http://localhost:8018 and show the app running.

Demo order summary:





if not running

npm run format

Then manually remove the const x=1 line we added. Run:
bash
python3 << 'EOF'
with open('src/App.tsx', 'r') as f:
    lines = f.readlines()

lines = [l for l in lines if 'const x=1' not in l and 'const x = 1' not in l]

with open('src/App.tsx', 'w') as f:
    f.writelines(lines)

print('Done')
EOF
Then verify everything passes locally:
bash
npm run format:check
npm run lint
npm test

Once all three pass, commit and push:
bash

git add .
git commit -m "fix: restore App.tsx to correct state"
git push origin main