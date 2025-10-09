import { Webhook } from "svix";
import User from "../models/User.js";

// API Controller Function to Manage Clerk User with database
export const clerkWebHooks = async (req, res) => {
    try {
        // Create a Svix Instance with Clerk Webhook Secret
        const whook = new Webhook(process.env.CLERK_WEBHOOKS_SECRET);

        // Verifying Headers
        await whook.verify(JSON.stringify(req.body),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svox-signature": req.headers["svix-signature"]
        })

        // Getting Data from Request Body
        const { data, type } = req.body

        // Switch Case to perform CRUD Operations
        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    image: data.image_url,
                    resume: ''
                }
                await User.create(userData)
                res.json({})
                break;
            }

            case 'user.updated': {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    image: data.image_url,
                }
                await User.findByIdAndUpdate(data.id, userData)
                res.json({})
                break;
            }

            case 'user.deleted': {
                await User.findByIdAndDelete(data.id)
                res.json({})
                break;
            }
            
            default:
                break;
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'WebHooks Error' })
    }
}