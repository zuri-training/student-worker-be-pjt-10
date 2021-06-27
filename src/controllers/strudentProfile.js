const Student = require("../models/student");




exports.updateProfile = async (req, res) =>{
    // get student eamil from the request body
    const email = req.user.email
    try {
        // Get student from db and update profile
        const student = await Student.findOneAndUpdate({email},req.body,{new: true} )
        response(res, 200, "Student updated successfully", {student})
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error!")
    }
}

exports.fetchStudentProfile = async (req, res) =>{
    const {id} = req.params

    try {
        // fetch student data
       const student = Student.findById(id) 
       if (!student) return res.status(400).json({message : "student not found"})
       res.status(200).json({student})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}