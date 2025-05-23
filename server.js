import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import timetableRouter from "./routes/TimetableRoute.js";
import bookingRouter from "./routes/BookingRoute.js";
import notificationRouter from "./routes/NotificationRoute.js";

// App Config
const app = express();
const port = process.env.port || 4000;
connectDB();


// Middlewares
app.use(express.json());
// app.use(cors());
app.use(cors({ 
  origin: [
  "http://localhost:3000",
  "https://smartcampusapp.netlify.app"
  ],
  credentials: true
}));


// api endpoints
app.use("/api/user", userRouter);
app.use("/api/timetable", timetableRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/notification", notificationRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});


app.listen(port, () => console.log("Server started on PORT: " + port));
