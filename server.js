import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import routerBootcamp from "./routes/bootcamp.js";
import connectDB from "./db/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan());
}

connectDB();
app.use("/api/v1/bootcamps", routerBootcamp);

const server = app.listen(PORT, () =>
  console.log(
    `server started in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
      .bgCyan.underline.bold
  )
);

// Handle unhandlel promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`unhandledRejection Error ${err.message}`.bgRed.bold);
  // Close server & exit process
  server.close(() => process.exit(1));
});
