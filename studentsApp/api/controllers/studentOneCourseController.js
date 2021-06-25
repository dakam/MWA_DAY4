const mongoose =require("mongoose");
const student = mongoose.model("Student");


module.exports.studentOneCourse = function(req, res) {

    
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;

    if(studentId && courseId ) {

        
        student.findById(studentId).select("courses").exec(function(err, students) {


            const course= students.courses.id(courseId);
            console.log("Courses for the Student Found");
            res.status(200).json(course);

        });

    }
    else
    {

       let msg = "no Course id or Student Id Supplied";
       res.status(200).json({"message":msg});

    }

    
}