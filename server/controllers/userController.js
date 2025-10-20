import User from "../models/User.js";



// Get User Data
export const getUserData = async (req, res) => {

    const userId = req.auth.userId;
    try {
        const user = await User.findById(userId);
        if (condition) {
            
        }
    } catch (error) {
        
    }

}

// Apply for a Job
export const applyForJob = async (req, res) => {

}

// Get User Applied Applications
export const getUserJobApplications = async (req, res) => {

}

// Update User Profile (Resume)
export const updateUserResume = async (req, res) => {

}