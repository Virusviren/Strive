import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import authorRouter from "./authors/index.js";
import blogRouter from "./blogpost/index.js";

import {notFound,forbidden,catchAllErrorHandler} from "./errorHandlers.js"


const server = express();
const PORT = 3001;
server.use(cors());
server.use(express.json());
server.use("/authors", authorRouter);
server.use("/blogs",blogRouter)
server.use(notFound)
server.use(forbidden)
server.use(catchAllErrorHandler)
console.table(listEndpoints(server));

server.listen(PORT, () => console.log("server started on port " + PORT));
server.on("error", (error) => console.log(error));
