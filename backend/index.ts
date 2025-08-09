import express from "express";

const app = express();

app.use(express.json());
async function main() {
  try {
    app.listen(8080);
    console.log("Server running on port 8080");
  } catch (error) {
    console.log("An unkown error has occured", error);
  }
}

main();
