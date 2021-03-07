const express = require("express");
const app = express();
// Database connection
const mongoose = require("mongoose");
// Import environment variables
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 300;
// Import Routes
const authRoute = require("./routes/auth");

// connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("\x1b[36m%s\x1b[0m", "Connected to DB")
);

// Middleware
app.use(express.json());
// Route Middleware
app.use("/api/user", authRoute);

app.listen(
  PORT,
  console.log("\x1b[35m%s\x1b[0m", `⚡️[server]: Running at port:${PORT}`)
);
