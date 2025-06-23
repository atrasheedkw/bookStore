import express from "express";
import dotenv from "dotenv";
import loggerMiddleware from "./middleware/logger";
import cors from "./middleware/cors";
import { notFound } from "./middleware/NotFound";
import AuthorRouter from "./routes/authorRouter";
import CategoryRouter from "./routes/categoryRouter";
import BookRouter from "./routes/bookRouter";
import path from "path";
//read secret keys from env file
dotenv.config();

const app = express();

//cors middleware
app.use(cors);

//Morgan middleware for logging requests to server
app.use(loggerMiddleware);

//prasing json
app.use(express.json());

//handle file uploads
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

//author routes
app.use("/author", AuthorRouter);

//category routes
app.use("/category", CategoryRouter);

//book routes
app.use("/books", BookRouter);

//NotFound Route Error, the placement of this line of code is important
// This line of code must be placed after routes so it only catches undefined routes
app.use(notFound);

export default app;
