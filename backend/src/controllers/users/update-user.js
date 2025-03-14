import bcrypt from "bcrypt";
import { UserModel } from "../../models/user.schema.js";

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    updatedUser.password = undefined;

    res.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("Update user error:", err);
    res.status(500).json({
      message: "Error occurred while updating user",
      error: err.message,
    });
  }
};
