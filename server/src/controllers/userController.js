import User from "../models/userModel.js";
import { getAuth } from "@clerk/express";

export const saveUser = async (req, res) => {
  try {
    const auth = getAuth(req);
    const userId = auth.userId;
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const existingUser = await User.findOne({
      clerkId: userId,
    });

    if (existingUser) {
      return res.json({
        success: true,
        message: "User already exists",
      });
    }

    const user = req.body;

    await User.create({
      clerkId: userId,
      name: user.name,
      email: user.email,
      image: user.image,
    });

    res.json({
      success: true,
      message: "User saved",
    });
  } catch (error) {
    console.error("Save user error:", error);
    res.status(500).json({
      success: false,
      message: "Error saving user",
      error: error.message,
    });
  }
};