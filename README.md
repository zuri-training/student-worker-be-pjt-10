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


##Filter / search
Location: All---showcase all the job postings
Different locations: Lagos, Abuja, Imo, other etc showcase job ltd to each location

Untick job type:
is there any other form of job type i.e if it's not onsite or remote
i think default shd be indicated job type (e.g onsite or remote) and non-indicated job type

i think there is no need for 1st and last names in employer schema

no salary and job duration per week range in employer schema
as shown on d job page design

this is from job schema:
 isRemote: {
            type: Boolean,
            required: true,
            minLength: 3,
        },

i think it should be like this:
isRemote: {
          type: Boolean,
          required: true,
          minLength: 3,
          enum: ['all-jobs', 'remote', 'on-site']
}

Also:
is location restricted to only abuja, imo and lagos?
 location: {
            type: String,
            required: true,
            minLength: 3,
            trim: true
        },
let's include others for locations not stated or we
make the filter an editable input box that the student
can enter d location of there choice

#to get the search/filter working:
use this format
localhost:7005/jobs?jobType=unknown
localhost:7005/jobs?jobType=remote
localhost:7005/jobs?jobType=on-site

change the input value of the raw data each 
time you make a post req in postman



