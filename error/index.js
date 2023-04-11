const CustomAPIError = require("./custom-error");
const BadRequestError = require("./bad-requset");

const UnauthenticatedError = require("./unauthenticated");
const InternalServerError = require("./internal-server-error");
module.exports = {
  CustomAPIError,
  BadRequestError,

  InternalServerError,
  UnauthenticatedError,
};
