import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic faculty is created succesfully",
    data: result,
  });
});

const getAcademicFaculty = catchAsync(async (req, res) => {
  const result = await academicFacultyServices.getAcademicFacultyFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic faculty is retrive succesfully",
    data: result,
  });
});

const getSingelAcademicFaculty = catchAsync(async (req, res) => {
  const { academicFacultyId } = req.params;
  const result =
    await academicFacultyServices.getSingleAcademicFacultyFromDB(
      academicFacultyId,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Retrive single academic faculty succesfully",
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { academicFacultyId } = req.params;
  const result = await academicFacultyServices.updateAcademicFacultyFromDB(
    academicFacultyId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Update academic faculty succesfully",
    data: result,
  });
});

export const academicFacultyControllers = {
  createAcademicFaculty,
  getAcademicFaculty,
  getSingelAcademicFaculty,
  updateAcademicFaculty,
};
