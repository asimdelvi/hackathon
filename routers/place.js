import express from "express";
import { renderNewForm, createPlace } from "../controllers/place.js";
import { storage } from "../cloudinary/index.js";
import multer from "multer";
const upload = multer({ storage });

export const router = express.Router({ mergeParams: true });

router.post("/", upload.single("image"), createPlace); //Create Hotel

router.get("/new", renderNewForm);
