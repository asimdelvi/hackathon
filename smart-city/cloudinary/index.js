import { config, uploader } from "cloudinary";
const cloudinaryConfig = () =>
  config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

export { cloudinaryConfig, uploader };
