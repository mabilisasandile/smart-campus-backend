import express from "express";
import { createNotification, getNotifications } from "../controllers/NotificationController.js";

const notificationRouter = express.Router();

// POST: Create new notification
notificationRouter.post("/createnotification", createNotification);
// GET: Fetch all notifications
notificationRouter.get("/fetchnotifications", getNotifications);

export default notificationRouter;