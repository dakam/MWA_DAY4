
const mongoose= require("mongoose");
const Student = mongoose.model("Student");


module.exports.GetAll = function(req, res) {

    let offset = 0;
    let count = 9;

    if(req.query && req.query.offset && req.query.count) {

        let offset = parseInt(req.query.offset, 0);
        let count = parseInt(req.query.count, 6);
           
        Student.find().skip(offset).limit(count).exec(function(err, students) {
            console.log("Found alist of student");
            res.status(200).json(students);
        });


    }
    else {
        Student.find().exec(function(err, students) {
            console.log(`We fetched Students:  ${students}`);
            res.status(200).json(students);
        });
    }

   

}