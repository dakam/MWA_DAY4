const express = require("express");
const studentsControllers = require("../controllers")
const Srouter = express.Router();

Srouter.route("/students")
.get(studentsControllers.StudentsGetAll)

Srouter.route("/students/:studentId")
.get(studentsControllers.StudentsGetOne)
Srouter.route("/students/:studentId/courses/:courseId")
.get(studentsControllers.StudentGetOneCourse)

Srouter.route("/students/:studentId/courses")
.get(studentsControllers.StudentCoursesAll)




module.exports = Srouter;