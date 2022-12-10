import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  placename: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

export const Place = mongoose.model("Place", placeSchema);
