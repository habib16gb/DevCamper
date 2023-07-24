import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import routerBootcamp from "./routes/bootcamp.js";
import { showMethod } from "./middlewares/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan());
}

// app.use(showMethod);

app.use("/api/v1/bootcamps", routerBootcamp);

app.listen(PORT, () =>
  console.log(
    `server started in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
  )
);
