import express from "express";
import { renderNewForm, createHotel } from "../controllers/hotel.js";
import { storage } from "../cloudinary/index.js";
import multer from "multer";
const upload = multer({ storage });

export const router = express.Router({ mergeParams: true });

router.post("/", upload.single("image"), createHotel); //Create Hotel

router.get("/new", renderNewForm);
