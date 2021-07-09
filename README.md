# Student Worker
This is the backend version of the Student-Worker App by PJT-10 from the Zuri Training.   
This readme explains the endpoints here.   
Please test it with postman first

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
 - success format: {msg: 'signup successfull', token: 'save this token and always add it in your subsequent request'}

## Signup Employer
 - endpoint: baseUrl/loginEmployer
 - method: POST
 - body: {email, password} // they are both required
 - error format: {error: 'this is how the errors will look like'}
 - success format: {msg: 'signup successfull', token: 'save this token and always add it in your subsequent request'}