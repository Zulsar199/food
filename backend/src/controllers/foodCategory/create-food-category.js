// import FoodCategoryModel from ""

export const createFoodCategory = async (req, res) => {
  const { name } = req.body;
  try {
    await FoodCategoryModel.create({ name });
    res.json({ message: "Success" });
  } catch (e) {
    console.log(error);
    res.status(403).json({ message: "Error occured" });
  }
};
