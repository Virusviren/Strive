import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import router from "./authors/index.js";
const server = express();
const PORT = 3001;
server.use(cors());
server.use(express.json());
server.use("/authors", router);

console.table(listEndpoints(server));

server.listen(PORT, () => console.log("server started on port " + PORT));
server.on("error", (error) => console.log(error));
