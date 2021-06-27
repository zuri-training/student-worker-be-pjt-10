const Employer = require("../models/employer");
const Student = require("../models/student");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// handle sign in
const handleStudentLogin =(req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        message: "all fields can not be empty"
      });
    }

    Student.findOne({
      email: email
    })
      .exec((err, student) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        // compare the password of the req.body and the one in the database
        const passwordIsValid = bcrypt.compareSync(password, student.password);
        if (!passwordIsValid) {
          return res.status(401).send({
            message: "Invalid Password!"
          });
        }
        if (passwordIsValid) {
          // get the student profile
          return res.status(200).send(student)
        } else {
          Promise.reject('wrong credentials');
        }
      })
  }

  // get jwt authorization token
  const getAuthTokenId = (req,res) => {
    const {authorization} = req.headers;
   return jwt.verify(authorization, 'secret', (err, reply) =>{
        if(err || !reply) {
          return res.status(400).json('Unauthorized');
        }
        return res.json({id: reply});
    }
     )
  }



exports.studentLoginAuthentication = (req, res) => {
  const{ authorization} = req.headers;
    return authorization ? getAuthTokenId(req,res) : handleStudentLogin(req,res)
}