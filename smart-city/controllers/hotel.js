import express from "express";
import { Hotel } from "../models/hotel.js";
import { City } from "../models/city.js";

export const createHotel = async (req, res, next) => {
  const city = await City.findById(req.params.id);
  const hotel = new Hotel(req.body.hotel);
  hotel.image = req.file.path;
  city.hotels.push(hotel);
  await hotel.save();
  await city.save();
  res.redirect(`/city/${city.id}`);
};

export const renderNewForm = async (req, res, next) => {
  console.log(req.params);
  const city = await City.findById(req.params.id);
  res.render("hotels/new", { city });
};
