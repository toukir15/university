import { z } from "zod";

const createAcademicValidationSchema = z.object({
  name: z.string({ invalid_type_error: "Password must be string!" }),
});

const updateAcademicValidationSchema = z.object({
  name: z.string({ invalid_type_error: "Password must be string!" }),
});

export const academicFacultyValidation = {
  createAcademicValidationSchema,
  updateAcademicValidationSchema,
};
