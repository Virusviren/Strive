//   Student should have this information:
//     - Name
//     - Surname
//     - ID
//     - Email
//     - Date of Birth
//     //BACKEND

//     You are in charge of building the Backend using ExpressJS. The backend should include the following routes:
//     GET /students => returns the list of students
//     GET /students/123 => returns a single student
//     POST /students => create a new student
//     PUT /students/123 => edit the student with the given id
//     DELETE /students/123 => delete the student with the given id
//     The persistence must be granted via file system (es.: Json file with a list of students inside)
import express from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const router = express.Router();
const filename = fileURLToPath(import.meta.url);

const studentJsonPath = join(dirname(filename), "studentInfo.json");
console.log(studentJsonPath);
// GET /students => returns the list of students
router.get("/", (req, res) => {
  console.log("GET /students => returns the list of students");
  res.send(studentJsonPath);
});
// GET /students/123 => returns a single student
router.get("/:id", (req, res) => {
  console.log("Unique id", req.params.id);
  res.send(req.params.id);
});

router.post("/", (req, res) => {
  const fileAsBuffer = fs.readFileSync(studentJsonPath);
  let data = JSON.parse(fileAsBuffer);
  let test = req.body;
  let test2 = JSON.stringify(test);

  console.log(test);

  //const newStudent = ;
  //console.log(newStudent);
});

export default router;
