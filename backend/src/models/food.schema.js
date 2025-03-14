import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const foodSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  foodName: String,
  price: { type: Number, required: true },
});

export const FoodModel = models.Foods || model("Foods", foodSchema);
