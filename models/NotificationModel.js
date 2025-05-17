import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  postedBy: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

const NotificationModel = mongoose.models.notification || mongoose.model('notification', notificationSchema);

export default NotificationModel;