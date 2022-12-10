import express from "express";
import { City } from "../models/city.js";
import { Hotel } from "../models/hotel.js";

// Read all
export const showAllCities = async (req, res, next) => {
  const cities = await City.find({});
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

// module.exports.renderEditForm = async (req, res, next) => {
//   const city = await City.findById(req.params.id);
//   if (!city) {
//     return res.redirect("/city");
//   }
//   res.render("campgrounds/edit", { city });
// };

// module.exports.updateCampground = async (req, res, next) => {
//   try {
//     const geoData = await geoCoder
//       .forwardGeocode({
//         query: req.body.campground.location,
//         limit: 1,
//       })
//       .send();
//     // if (!req.body.campground)
//     // throw new ExpressError("Enter all the required fields", 400);
//     const campground = await Campground.findByIdAndUpdate(
//       req.params.id,
//       req.body.campground
//     );
//     images = req.files.map((f) => ({
//       url: f.path,
//       filename: f.filename,
//     }));
//     campground.geometry = geoData.body.features[0].geometry;
//     campground.images.push(...images);
//     await campground.save();
//     if (req.body.deleteImages) {
//       for (const image of req.body.deleteImages) {
//         cloudinary.uploader.destroy(image);
//       }
//       await campground.updateOne({
//         $pull: { images: { filename: { $in: req.body.deleteImages } } },
//       });
//     }
//     req.flash("success", "Successfully updated campground");
//     res.redirect(`/campgrounds/${campground.id}`);
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports.deleteCampground = async (req, res, next) => {
//   try {
//     await Campground.findByIdAndDelete(req.params.id);
//     req.flash("success", "Successfully deleted campground");
//     res.redirect("/campgrounds");
//   } catch (error) {
//     next(error);
//   }
// };
