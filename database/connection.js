// const mongoose = require("mongoose");
// const url =
//   process.env.NODE_ENV !== "production"
//     ? process.env.DEV_MONGO_URL
//     : process.env.PROD_MONGO_URL;

// const db = mongoose
//   .connect(url, {
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to the mongodb database");
//   })
//   .catch((error) => {
//     console.log(error.name);
//     console.log(error);
//     console.log(process.env.DEV_MONGO_URL);
//     console.log(process.env.PROD_MONGO_URL);
//   });

// module.exports = db;
const mongoose = require("mongoose");

// Use the appropriate MongoDB URL based on the environment
const url =
  process.env.NODE_ENV !== "production"
    ? process.env.DEV_MONGO_URL
    : process.env.PROD_MONGO_URL;

// Connect to MongoDB
const db = mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 15000, // Increase timeout for server selection
  })
  .then(() => {
    console.log("Connected to the MongoDB database");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message); // Log error message
    console.error("Error details:", error); // Log full error object
    console.log("Development MongoDB URL:", process.env.DEV_MONGO_URL); // Log dev URL
    console.log("Production MongoDB URL:", process.env.PROD_MONGO_URL); // Log prod URL
  });

// Export the connection
module.exports = db;
