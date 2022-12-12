import express from "express";
import { City } from "../models/city.js";
import { Hotel } from "../models/hotel.js";

// Read all
export const showAllCities = async (req, res, next) => {
  const cities = await City.find({});
  console.log("hi");
  res.render("cities/index", { cities });
};

export const renderNewForm = async (req, res, next) => {
  res.render("cities/new");
};

export const createCity = async (req, res, next) => {
  const city = new City(req.body.city);
  city.image = req.file.path;
  await city.save();
  res.redirect(`/city/${city.id}`);
};

export const showCity = async (req, res, next) => {
  const city = await City.findById(req.params.id)
    .populate("hotels")
    .populate("places");
  if (!city) {
    return res.redirect("/city");
  }
  res.render("cities/show", { city });
};
