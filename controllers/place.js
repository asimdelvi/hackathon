import express from "express";
import { Place } from "../models/place.js";
import { City } from "../models/city.js";

export const createPlace = async (req, res, next) => {
  const city = await City.findById(req.params.id);
  const place = new Place(req.body.place);
  place.image = req.file.path;
  city.places.push(place);
  await place.save();
  await city.save();
  res.redirect(`/city/${city.id}`);
};

export const renderNewForm = async (req, res, next) => {
  const city = await City.findById(req.params.id);
  res.render("places/new", { city });
};
