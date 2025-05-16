import mongoose from 'mongoose';

const TimetableSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  classes: {
    type: [String],
    required: true,
  },
});

const timetableModel = mongoose.models.timetable || mongoose.model('timetable', TimetableSchema);

export default timetableModel;