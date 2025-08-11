import { Router } from "express";
import { schemaValidator } from "../middlewares/schemaValidator";
import { registerSchema } from "../schemas/user.schema";

const router = Router();

router.get("/test", schemaValidator(registerSchema), (req, res) => {
  res.send("Hello world");
});

export default router;
