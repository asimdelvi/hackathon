import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  cityname: {
    type: String,
    required: true,
  },
  hotels: [
    {
      type: mongoose.Types.ObjectId,
      refer: "Hotel",
    },
  ],
});

export const City = mongoose.model("City", citySchema);
