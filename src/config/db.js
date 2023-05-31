import mongoose from "mongoose";

export default function connection() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/SupaMenuDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Connected to db`);
    })
    .catch((err) => {
      console.log(`Couldn't connect \n ${err}`);
    });
}
