import express from "express";
import { createBooking, getBookings, getUserBookings, updateBooking, deleteBooking } from "../controllers/BookingController.js";

const bookingRouter = express.Router();

// POST: Create new booking 
bookingRouter.post("/createbooking", createBooking);
// GET: Fetch all bookings
bookingRouter.get("/fetchbookings", getBookings);
// GET: Fetch bookings for a specific user
bookingRouter.get("/fetchuserbookings/:userId", getUserBookings);
// PUT: Update a booking
bookingRouter.put("/updatebooking/:id", updateBooking);
// DELETE: Delete a booking
bookingRouter.delete("/deletebooking/:id", deleteBooking);

export default bookingRouter;
