const { InternalServerError, BadRequestError } = require("../error");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const path = require("path");
const fs = require("fs");

const uploadUserImage = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError("no file uploaded");
  }
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith("image")) {
    throw new BadRequestError("please upload an image");
  }
  const maxSize = process.env.MAX_SIZE_IMAGE;
  if (productImage.size > maxSize) {
    throw new BadRequestError("please upload image under 400KB size");
  }

  try {
    const { url } = await cloudinary.uploader.upload(
      req.files.image.tempFilePath,
      {
        use_filename: true,
        folder: "img",
      }
    );
    fs.unlinkSync(req.files.image.tempFilePath);
    res.json({ src: url });
  } catch (error) {
    throw new InternalServerError("no file uploaded");
  }
};
module.exports = uploadUserImage;
