import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectMongoose from "./src/config/mongoConnection.js";
import logger from "./src/logger.js";
import UserModel from "./src/models/user-schema.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

server.use(
  cors({
    origin: "*",
  })
);
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get("/", (req, res) =>
  res.send(`Travelopia listening on port ${PORT}!`)
);

server.get("/users", (req, res) => {
  UserModel.find((err, data) => {
    if (err) logger.error(err);
    return res
      .status(200)
      .send({ message: "Retrived successfully", data });
  });
});

server.post("/users", (req, res) => {
  UserModel.create(req.body, (err, data) => {
    if (err) logger.error(err);
    res.status(200).send({ message: "Added successfully", data });
  });
});

connectMongoose.then(() => logger.info("Connected to DB"));

server.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
