import express from "express";
import cors from "cors";
import passport from "passport";
import authRoutes from "./routes/authRoutes";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost", //Ruta de donde tendra acceso este servidor
    methods: "GET,POST",
    credentials: true,
  })
);
// app.use(passport.initialize());
// app.use(passport.session());

app.use("/api/auth", authRoutes);

async function main() {
  try {
    app.listen(8080);
    console.log("Server running on port 8080");
  } catch (error) {
    console.log("An unkown error has occured", error);
  }
}

main();
