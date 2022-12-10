import express from "express";
import {
  showAllCities,
  renderNewForm,
  createCity,
  showCity,
} from "../controllers/city.js";
import { storage } from "../cloudinary/index.js";
import multer from "multer";
const upload = multer({ storage });

export const router = express.Router();

router
  .route("/")
  .get(showAllCities) //All cities
  .post(
    (req, res, next) => {
      console.log("hey");
      next();
    },
    upload.single("image"),
    createCity
  ); //Create city

router.get("/new", renderNewForm); //New form

router.route("/:id").get(showCity); //Show
