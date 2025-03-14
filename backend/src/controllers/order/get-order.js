import { OrderModel } from "../../models/order.schema.js";

export const getOrderById = async (req, res) => {
  const order = await OrderModel.findById(req.params.id).populate([
    "user",
    "foodOrderItems.food",
  ]);

  res.json({ order });
};
