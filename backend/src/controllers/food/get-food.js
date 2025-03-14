import { FoodModel } from "../../models/food.schema.js";

export const getFoodById = async (req, res) => {
  const food = await FoodModel.findById(req.params.id);
  res.json({ food });
};
