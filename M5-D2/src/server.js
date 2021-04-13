import express from "express";
import studentsRoutes from "./students/index.js";
const server = express();

const port = 3001;

server.use("/students", studentsRoutes);

// Port address
server.listen(port, () => {
  console.log("working ", port);
});
