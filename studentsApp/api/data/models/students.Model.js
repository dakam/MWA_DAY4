const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    coursename: {
        type: String,
        require: true
    },
    coursecode: {
        type: String,
        require:true,
         
    },
    coursecredits: {
        type:Number,
        min:0,
        max:4.0,
    },
})

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true,
    },
 
    GPA: {
        type:Number,
        min:0,
        max:4.0,
    },
  
    courses: [coursesSchema],

});

mongoose.model("Student", studentSchema, "Students");