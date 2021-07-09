# Student Worker
This is the backend version of the Student-Worker App by PJT-10 from the Zuri Training.   
This readme explains the endpoints here.   
Always check if the status code is 200 before performing an operation
Please test it with postman first.

## Base URL
https://student-worker2.herokuapp.com

## Signup Student
 - endpoint: baseUrl/signupStudent
 - method: POST
 - body: {email, password} // they are both required
 - error format: {error: 'this is how the errors will look like'}
 - success format: {msg: 'signup successfull', token: 'save this token and always add it in your subsequent request'}

## Signup Employer
 - endpoint: baseUrl/signupEmployer
 - method: POST
 - body: {email, password} // they are both required
 - error format: {error: 'this is how the errors will look like'}
 - success format: {msg: 'signup successfull', token: 'save this token and always add it in your subsequent request'}

## Login Student
 - endpoint: baseUrl/loginStudent
 - method: POST
 - body: {email, password} // they are both required
 - error format: {error: 'this is how the errors will look like'}
 - success format: {msg: 'successful', token: 'save this token and always add it in your subsequent request'}

## Login Employer
 - endpoint: baseUrl/loginEmployer
 - method: POST
 - body: {email, password} // they are both required
 - error format: {error: 'this is how the errors will look like'}
 - success format: {msg: 'successful', token: 'save this token and always add it in your subsequent request'}

## Create Resume
 - endpoint: baseUrl/createResume
 - method: POST
 - body:  
   {token,    
  firstname,     
  lastname,    
  countryCode,    
  mobileNumber,    
  currentState,    
  currentCity,    
  school,   
  course,   
  startYear,   
  endYear,   
  skill1,   
  skill2,   
  skill3  
   }
 - error format: {error: 'this is how the errors will look like'}
 - success format: {msg: 'successful', token: 'save this token and always add it in your subsequent request'}

## Create Employer Profile
- endpoint: baseUrl/employerProfile
 - method: POST
 - body:  
   {token,    
  firstname,     
  lastname,    
  countryCode,    
  mobileNumber,      
  currentState,      
  companyName,     
  description,     
  address
   }
 - error format: {error: 'this is how the errors will look like'}
 - success format: {msg: 'successful', token: 'save this token and always add it in your subsequent request'}
## Seacrh for Jobs
 - endpoint: baseUrl/search
 - method: GET
 - body: {} // you don't need a request body
 - query parameters: {location, jobType} e.g baseUrl/loginEmployer?location=lagos&jobType=remote
 - error format: {error: 'this is how the errors will look like'}
 - success format: {msg: 'successful'}

## Post a Job (for employer)
 - endpoint: baseUrl/postJob
 - method: POST
 - body: {email, // employer's email
        title,   
        companyName,    
        location,     
        jobType,    
        salary,    
        hrsPerWee,   
        dateCreated,   
        aboutCompan,   
        studentResponsibility,   
        eligibility,    
        token    
        }
- error format: {error: 'this is how the errors will look like'}
 - success format: {msg: 'successful', token: 'save this token and always add it in your subsequent request'}
