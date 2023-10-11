const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const {CloudinaryStorage} = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "cardvo",
  },
});

const upload = multer({storage});

const cloudinaryDelete = (url) => {
  const splitUrl = url.split("/");
  const fileFolderAndNameArray = [splitUrl[7], splitUrl[8]];
  const fileFolderAndNamePath = fileFolderAndNameArray.join("/");
  const deletePath = fileFolderAndNamePath.split(".")[0]; // remove extension

  return cloudinary.uploader.destroy(deletePath, (error) => {
    if (error) {
      throw new Error(error.message);
    }
  });
};

module.exports = {
  upload,
  cloudinaryDelete,
};
