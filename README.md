# Student Worker
This is the backend version of the Student-Worker App by PJT-10 from the Zuri Training

## A Guide To Get Started
1 Folk this [project](https://github.com/Mitchel-jf/student_worker/)

2 Git clone your own folked project to your computer

3 Before you make any changes, keep your fork in sync to avoid merge conflicts:
```
git remote add upstream https://github.com/Mitchel-jf/student_worker.git
```
To have the updated code on your computer 
```
git pull upstream main
```
4 Create your branch and push your work

5 Create a `.env` in the root directory and fill with respective ports and database connection
```
PORT = ''
MONGO = ''
```
6 Start server 
```
npm start
```
7 with nodemon
```
npm run start:dev
```

## Student endpoints

TEST WITH POSTMAN

1 Register new students (For development)

`localhost:${PORT}/studentSignup` with a POST request using the schema in [student.js](https://github.com/Mitchel-jf/student_worker/blob/main/src/models/student.js) file as guide


2 Login (for only registered students)

`localhost:${PORT}/studentLogin` with a POST request using just email and password


