import bookingModel from '../models/BookingModel.js';

const createBooking = async (req, res) => {
  try {
    const { userId, type, room, date, time, endTime, module } = req.body;
    const newBooking = new bookingModel({ userId, type, room, date, time, endTime, module });
    await newBooking.save();
    res.status(201).json(newBooking);
    console.log("Booking created: ", newBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error creating booking: ",error);
  }
}

const getBookings = async (req, res) => {
  try {
    const bookings = await bookingModel.find();
    res.status(200).json(bookings);
    console.log("Bookings fetched: ", bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error fetching bookings: ",error);
  }
};

const getUserBookings = async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await bookingModel.find({ userId });
    res.status(200).json(bookings);
    console.log("User bookings fetched: ", bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error fetching user bookings: ",error);
  }
};

const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBooking = await bookingModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedBooking);
    console.log("Booking updated: ", updatedBooking);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error updating booking: ",error);
    }
}

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    await bookingModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Booking deleted successfully' });
    console.log("Booking deleted: ", id);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error deleting booking: ",error);
  }
};

export { createBooking, getBookings, getUserBookings, updateBooking, deleteBooking };