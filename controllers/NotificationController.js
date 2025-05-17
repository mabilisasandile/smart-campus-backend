import NotificationModel from "../models/NotificationModel.js";

const createNotification = async (req, res) => {
  try {
    const { message, postedBy } = req.body;
    const newNotification = new NotificationModel({ message, postedBy });
    await newNotification.save();
    res.status(201).json(newNotification);
    console.log("Notification created: ", newNotification);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error creating notification: ", error);
  }
}

const getNotifications = async (req, res) => {
  try {
    const notifications = await NotificationModel.find();
    res.status(200).json(notifications);
    console.log("Notifications fetched: ", notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error fetching notifications: ", error);
  }
}

export { createNotification, getNotifications };