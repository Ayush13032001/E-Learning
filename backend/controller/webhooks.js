import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhook = async (req, res) => {
  try {
    console.log("Webhook received");

    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Raw body is required for Svix verification
    const payload = req.body;
    const body = payload.toString();

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Verify webhook
    const evt = webhook.verify(body, headers);

    const { data, type } = evt;

    console.log("Event Type:", type);

    if (type === "user.created") {
      const userData = {
        _id: data.id,
        name: `${data.first_name || ""} ${data.last_name || ""}`,
        email: data.email_addresses[0].email_address,
        imageUrl: data.image_url,
      };

      console.log("Creating user:", userData);

      await User.create(userData);
    }

    if (type === "user.updated") {
      const userData = {
        name: `${data.first_name || ""} ${data.last_name || ""}`,
        email: data.email_addresses[0].email_address,
        imageUrl: data.image_url,
      };

      console.log("Updating user:", userData);

      await User.findByIdAndUpdate(data.id, userData);
    }

    if (type === "user.deleted") {
      console.log("Deleting user:", data.id);

      await User.findByIdAndDelete(data.id);
    }

    return res.status(200).json({
      success: true,
      message: "Webhook processed",
    });
  } catch (error) {
    console.error("Webhook Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
