import express from 'express'
import { createTimetable, getTimetable } from '../controllers/TimetableController.js';

const timetableRouter = express.Router();

// POST: Create new timetable entry
timetableRouter.post('/createtimetable', createTimetable);

// GET: Fetch all timetable entries
timetableRouter.get('/fetchtimetable', getTimetable);

export default timetableRouter;