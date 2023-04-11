const express = require("express");
const fileUpload = require("express-fileupload");
require("express-async-errors");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const cors = require("cors");
const NotFoundError = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connect = require("./db/connect");
const {
  userRouter,
  uploadRouter,
  taskRouter,
  historyRouter,
  languageRouter,
} = require("./router");
const notFound = require("./middleware/not-found");

const app = express();
const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});
//middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp/",
  })
);
app.use(express.json());
app.use(cors());
//routes middleware
app.use("/api/users", userRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/languages", languageRouter);
app.use("/api/task", taskRouter);
app.use("/api/history", historyRouter);
//not found route
app.use(NotFoundError);
app.use(errorHandlerMiddleware);

const start = async () => {
  const PORT = process.env.PORT | 3500;
  try {
    await connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
