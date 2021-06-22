import express from "express";
import fs from "fs";
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";
import uniqid from "uniqid";

const router = express.Router();

const currentFilePath = fileURLToPath(import.meta.url);
const currentFolderPath = dirname(currentFilePath);
const authorsJsonPath = path.join(currentFolderPath, "authors.json");

// TO Get the all authors available in the Database
router.get("/", async (req, res, next) => {
  try {
    const fileAsBuffer = fs.readFileSync(authorsJsonPath);
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
    const fileAsBuffer = fs.readFileSync(authorsJsonPath);
    const fileAsString = fileAsBuffer.toString();
    const fileAsJson = JSON.parse(fileAsString);
    const author = fileAsJson.find((authors) => authors._id === req.params.id);
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

// To create the new author
router.post("/", async (req, res, next) => {
  try {
    //  const avatar = `https://eu.ui-avatars.com/api/?name=${req.body.FirstName}+${req.body.LastName}`;
    const newAuthor = {
      ...req.body,
      _id: uniqid(),
      CreatedAT: new Date(),
      avatar: `https://eu.ui-avatars.com/api/?name=${req.body.FirstName}+${req.body.LastName}`,
    };
    const oldAuthors = JSON.parse(fs.readFileSync(authorsJsonPath));
    oldAuthors.push(newAuthor);
    fs.writeFileSync(authorsJsonPath, JSON.stringify(oldAuthors));
    res.send(newAuthor);
  } catch (error) {
    res.sendStatus(status);
  }
});

// To delete the author from the database

router.delete("/:id", async (req, res, next) => {
  try {
    const fileAsBuffer = fs.readFileSync(authorsJsonPath);
    const fileAsString = fileAsBuffer.toString();
    let fileAsJson = JSON.parse(fileAsString);
    const author = fileAsJson.find((authors) => authors._id === req.params.id);
    if (!author) {
      res
        .status(404)
        .send({ message: `Author with ${req.params.id} is not found!` });
    }
    fileAsJson = fileAsJson.filter((authors) => authors._id !== req.params.id);
    fs.writeFileSync(authorsJsonPath, JSON.stringify(fileAsJson));
    res.status(204).send();
  } catch (error) {
    res.sendStatus(status);
  }
});

// To update the information of the existing author from the DB

router.put("/:id", async (req, res, next) => {
  try {
    const fileAsBuffer = fs.readFileSync(authorsJsonPath);
    const fileAsString = fileAsBuffer.toString();
    let fileAsJson = JSON.parse(fileAsString);
    const authorIndex = fileAsJson.findIndex(
      (authors) => authors._id === req.params.id
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
      updatedAt: new Date(),
      _id: req.params.id,
    };
    fileAsJson[authorIndex] = updatedData;
    fs.writeFileSync(authorsJsonPath, JSON.stringify(fileAsJson));
    res.send(updatedData);
  } catch (error) {
    res.sendStatus(status);
  }
});

export default router;
