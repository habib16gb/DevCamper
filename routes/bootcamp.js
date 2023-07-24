import express from "express";
import {
  showAllBootcamps,
  showOneBootcamp,
  addBootcamp,
  updateBootcamp,
  deleteBootcamp,
} from "../controllers/bootcampControl.js";

const routerBootcamp = express.Router();

routerBootcamp.route("/").get(showAllBootcamps).post(addBootcamp);

routerBootcamp
  .route("/:id")
  .put(updateBootcamp)
  .delete(deleteBootcamp)
  .get(showOneBootcamp);

export default routerBootcamp;
