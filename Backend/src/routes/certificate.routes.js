import express from "express";
import { getCertificates } from "../controllers/certificate.controller.js";

const router = express.Router();

router.get("/", getCertificates);

export default router;
