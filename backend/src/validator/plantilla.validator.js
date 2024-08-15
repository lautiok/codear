import { check } from "express-validator";
import validateRes from "../utils/handleValidator.js";

export const plantillaCreateValidator = [
  check("nombre").exists().notEmpty().isLength({ min: 1, max: 100 }),
  check("descripcion").exists().notEmpty().isLength({ min: 1, max: 100 }),
  check("category").exists().notEmpty().isLength({ min: 1, max: 100 }),
  check("price").exists().notEmpty().isLength({ min: 1, max: 100 }),
  check("urlDowload").exists().notEmpty().isURL(),
  (req, res, next) => {
    return validateRes(req, res, next);
  }
];

export const plantillaGetByIdValidator = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
    return validateRes(req, res, next);
  }
];