import express from "express";
import fs from "fs";
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";
import uniqid from "uniqid";
import {checkBlogPostSchema,checkValidationResult} from "./validation.js"

const router = express.Router();

const currentFilePath = fileURLToPath(import.meta.url);
const currentFolderPath = dirname(currentFilePath);
const blogsJsonPath = path.join(currentFolderPath, "blogs.json");

// TO Get the all blogs available in the Database
router.get("/", async (req, res, next) => {
  try {
    const fileAsBuffer = fs.readFileSync(blogsJsonPath);
    const fileAsString = fileAsBuffer.toString();
    const fileAsJson = JSON.parse(fileAsString);
    console.log(typeof fileAsJson);
    res.send(fileAsJson);
  } catch (error) {
    res.send(500).send({ message: error.message });
  }
});

//To get the single author by the id from the DB

router.get("/:id", async (req, res, next) => {
  try {
    const fileAsBuffer = fs.readFileSync(blogsJsonPath);
    const fileAsString = fileAsBuffer.toString();
    const fileAsJson = JSON.parse(fileAsString);
    const author = fileAsJson.find((blogs) => blogs._id === req.params.id);
    if (!author) {
      res
        .status(404)
        .send({ message: `Author with ${req.params.id} is not found!` });
    }
    res.send(author);
  } catch (error) {
    res.sendStatus(status);
  }
});

// To create the new blog
router.post("/",checkBlogPostSchema,checkValidationResult,async (req, res, next) => {
  try {
    //  const avatar = `https://eu.ui-avatars.com/api/?name=${req.body.FirstName}+${req.body.LastName}`;
    const blog = {
      ...req.body,
      _id: uniqid(),
      createdAt: new Date(),
      
    };
    const oldblogs = JSON.parse(fs.readFileSync(blogsJsonPath));
    oldblogs.push(blog);
    fs.writeFileSync(blogsJsonPath, JSON.stringify(oldblogs));
    res.send(blog);
  } catch (error) {
    res.sendStatus(status);
  }
});

// To delete the author from the database

router.delete("/:id", async (req, res, next) => {
  try {
    const fileAsBuffer = fs.readFileSync(blogsJsonPath);
    const fileAsString = fileAsBuffer.toString();
    let fileAsJson = JSON.parse(fileAsString);
    const author = fileAsJson.find((blogs) => blogs._id === req.params.id);
    if (!author) {
      res
        .status(404)
        .send({ message: `Author with ${req.params.id} is not found!` });
    }
    fileAsJson = fileAsJson.filter((blogs) => blogs._id !== req.params.id);
    fs.writeFileSync(blogsJsonPath, JSON.stringify(fileAsJson));
    res.status(204).send();
  } catch (error) {
    res.sendStatus(status);
  }
});

// To update the information of the existing author from the DB

router.put("/:id", async (req, res, next) => {
  try {
    const fileAsBuffer = fs.readFileSync(blogsJsonPath);
    const fileAsString = fileAsBuffer.toString();
    let fileAsJson = JSON.parse(fileAsString);
    const authorIndex = fileAsJson.findIndex(
      (blogs) => blogs._id === req.params.id
    );
    if (!authorIndex == -1) {
      res
        .status(404)
        .send({ message: `Author with ${req.params.id} is not found!` });
    }

    const oldData = fileAsJson[authorIndex];
    const updatedData = {
      ...oldData,
      ...req.body,
      avatar: `https://eu.ui-avatars.com/api/?name=${req.body.FirstName}+${req.body.LastName}`,
      updatedAt: new Date(),
      _id: req.params.id,
    };
    fileAsJson[authorIndex] = updatedData;
    fs.writeFileSync(blogsJsonPath, JSON.stringify(fileAsJson));
    res.send(updatedData);
  } catch (error) {
    res.sendStatus(status);
  }
});

export default router