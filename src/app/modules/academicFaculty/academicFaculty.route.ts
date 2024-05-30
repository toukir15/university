import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicFacultyControllers } from "./academicFaculty.controller";
import { academicFacultyValidation } from "./academicFaculty.validation";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(academicFacultyValidation.createAcademicValidationSchema),
  academicFacultyControllers.createAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
