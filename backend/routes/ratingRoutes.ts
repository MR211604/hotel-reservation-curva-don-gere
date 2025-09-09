import { Router } from "express";
import { createRating, getRatings } from "../controllers/ratingController";
import { schemaValidator } from "../middlewares/schemaValidator";
import { createRatingSchema } from "../schemas/rating.schema";

const router = Router();

router.get("/getRatings", getRatings);
router.post("/createRating", schemaValidator(createRatingSchema), createRating);
