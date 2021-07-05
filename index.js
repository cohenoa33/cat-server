const express = require("express");
const app = express();
var cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

// Database connection
const mongoose = require("mongoose");
// connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("\x1b[36m%s\x1b[0m", "Connected to DB")
);

const PORT = process.env.PORT || 8000;
// Import Routes
const authRoute = require("./routes/auth");
const userRote = require("./routes/user");
const petsRoute = require("./routes/pet");
const feedingRoute = require("./routes/feeding");

// Middleware
app.use(cors());
app.use(express.json());

// Route Middleware
app.use("/api", userRote);
app.use("/api/user", authRoute);
app.use("/api/pets", petsRoute);
app.use("/api/feedings", feedingRoute);
app.listen(
  PORT,
  console.log("\x1b[35m%s\x1b[0m", `⚡️[server]: Running at port:${PORT}`)
);
