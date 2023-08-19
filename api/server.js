const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");

// ENV config
dotenv.config();
const port = process.env.PORT || 5000;

// DB config
const connectToDB = require("./config/connectToDB");
connectToDB();

// APP config
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/project", projectRoutes);

app.use(errorHandler);
app.use(notFound);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
