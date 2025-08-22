// import mongoose from "mongoose";

// const connectDB = async () => {
//   mongoose.connection.on("connected", () => {
//     console.log("Database Connected");
//   });
//   await mongoose.connect(`${process.env.MONGO_URL}/estore`);
// };

// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");
  });

  await mongoose.connect(process.env.MONGO_URL, {
    dbName: "estore",  // better way instead of appending /estore
  });
};

export default connectDB;
