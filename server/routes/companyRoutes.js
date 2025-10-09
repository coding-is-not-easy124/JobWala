import express from 'express';
import { changeJobApplicationStatus, changeJobVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js';

const router = express.Router();

// Register a Company
router.post('/register', registerCompany);

// Company Login
router.post('/login', loginCompany);

// Get Company Data
router.get('/company', getCompanyData);

// Post a New Job
router.post('/pot-job', postJob);

// Get Applicants Data of a Company
router.get('/applicants', getCompanyJobApplicants);

// Get Company Job List
router.get('/jobs', getCompanyPostedJobs);

// Change Application's Status
router.post('/change-status', changeJobApplicationStatus);

// Change Application's Visibility
router.post('/change-visibility', changeJobVisibility)

export default router;