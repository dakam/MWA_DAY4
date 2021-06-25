const mongoose =require("mongoose");
const student = mongoose.model("Student");


module.exports.studentCoursesAll = function(req, res) {

    const studentId = req.params.studentId;


        student.findById(studentId).select("courses").exec(function(err, courses) {
            console.log("One Found Publisher");
            res.status(200).json(courses);

        });

    
}