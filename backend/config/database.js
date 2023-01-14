const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

exports.connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB Connected Successfully"))
    .catch((err) => {
      console.log("DB Connection failed");
      console.log(err);
      process.exit(1);
    });
};
