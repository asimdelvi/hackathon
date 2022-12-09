import express from "express";
import {
  showAllCities,
  renderNewForm,
  createCity,
  showCity,
} from "../controllers/city.js";

export const router = express.Router();

router
  .route("/")
  .get(showAllCities) //All cities
  .post(createCity); //Create city

router.get("/new", renderNewForm); //New form

router.route("/:id").get(showCity); //Show
