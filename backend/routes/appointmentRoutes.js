import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// Create Appointment
router.post("/", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment Saved Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
