import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['study', 'appointment'],
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  module: {
    type: String,
  }
});

const bookingModel = mongoose.models.booking || mongoose.model('booking', BookingSchema);

export default bookingModel;