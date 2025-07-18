import express from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController";

const CategoryRouter = express.Router();

CategoryRouter.get("/", getAllCategories);
CategoryRouter.get("/:id", getCategoryById);
CategoryRouter.post("/", createCategory);
CategoryRouter.put("/:id", updateCategory);
CategoryRouter.delete("/:id", deleteCategory);

export default CategoryRouter;
