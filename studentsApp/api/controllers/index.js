const allStudents = require("./studentsAllController");
const oneStudent = require("./studentsGetOneController")
const allStudentCourses = require("./studentCoursesAllController")
const oneStudentCourse = require("./studentOneCourseController")


module.exports = {
    StudentsGetAll:allStudents.GetAll,
    StudentsGetOne:oneStudent.GetOne,
    StudentCoursesAll:allStudentCourses.studentCoursesAll,
    StudentGetOneCourse:oneStudentCourse.studentOneCourse
}