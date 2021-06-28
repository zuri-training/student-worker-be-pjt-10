const Job = require('../models/job')


// app.post('/auth/jobs', 
exports.createNewJob = (req, res) => {

          Job.create({
                    ...req.body
          }, (err, newJob) => {
                              if(err) {
                                        return res.status(500).json({message: err})
                              }else {
                                        return res.status(200).json({ message: "new job created", newJob })
                              }
          })
}

exports.fetchJobs = (req, res) => {

          let conditions = {};

          if(req.query.jobType) {
                    conditions.jobType = req.query.jobType
          }

          Job.find(conditions, (err, jobs) => {
                    if(err) {
                              return res.status(500).json({ message: err })
                    }else {
                              return res.status(200).json({ jobs })
                    }
          })
}

exports.fetchSingleJob = (req, res) => {

          Job.findById(req.params.id, (err, job) => {
                    if(err) {
                              return res.status(500).json({message: err})
                    }else if(!job) {
                              return res.status(404).json({message: 'job not found'})
                    }else {
                              return res.status(200).json({  job  })
                    }
          })

}

exports.updateSingleJob = (req, res) => {
          Job.findByIdAndUpdate(req.params.id, {
                    jobType: req.body.jobType,
                    salary: req.body.salary,
                    duration: req.body.duration,
                    filled: req.body.filled
          }, (err, job) => {
                    if(err) {
                              return res.status(500).json({message: err})
                    }else if(!job) {
                              return res.status(404).json({message: 'job not found'})
                    }else {
                              job.save((err, saveJob) => {
                                        if(err) {
                                                  return res.status(400).json( { message: err } )
                                        }else {
                                                  return res.status(200).json(saveJob)
                                        }
                              })
                    }
          })
}

exports.deleteSingleJob = (req, res) => {
         Job.findByIdAndDelete(req.params.id, (err, job) => {
                    if(err) {
                              return res.status(500).json({message: err})
                    }else if(!job) {
                              return res.status(400).json({message: 'job was not found'})
                    }else {
                              return res.status(200).json({message: 'job deleted successfully'})
                    }
         })
}
