import express from 'express';
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controllers/userController.js';
import upload from '../config/multer.js';


const router = express.Router();

// Get User Data
router.get('/user', getUserData)

// Apply for a Job
router.post('/apply', applyForJob)

// Get Applied Jobs Data
router.get('/applications', getUserJobApplications);

// Update User Profile (Resume)
router.post('/update-resume', upload.single('resume'), updateUserResume);

export default router;