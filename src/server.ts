import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://first-project:ja4pvaSXTl4jaWgg@score.c3cefdv.mongodb.net/first-project?retryWrites=true&w=majority&appName=score",
    );

    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
