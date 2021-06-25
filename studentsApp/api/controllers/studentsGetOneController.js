
const mongoose= require("mongoose");
const Student = mongoose.model("Student");

module.exports.GetOne = function(req, res) {

    if(req.params.studentId) {

        const studentId = req.params.studentId;

        Student.findById(studentId).exec(function(err, student) {
            if(err) {
                console.log(`we encountered an Error : ${err}`)
            }
            console.log("One Found Student");
            res.status(200).json(student);

        });

    } else {
        let msg = "missing StudentId";

        res.status(301).json({"message":msg});  

    }

}