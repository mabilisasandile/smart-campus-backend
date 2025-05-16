import timetableModel from '../models/TimetableModel.js';

// Create a new timetable entry
const createTimetable = async (req, res) => {
  try {
    const { day, classes } = req.body;
    const newEntry = new timetableModel({ day, classes });
    await newEntry.save();
    res.status(201).json(newEntry);
    console.log("Timetable created: ", newEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error creating timetable: ",error);
  }
};

// Get all timetable entries
const getTimetable = async (req, res) => {
  try {
    const timetable = await timetableModel.find();
    res.status(200).json(timetable);
    console.log("Timetable fetched: ", timetable);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error fetching timetable: ",error);
  }
};

export { createTimetable, getTimetable};