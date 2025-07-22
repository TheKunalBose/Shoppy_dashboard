import express from 'express';
import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} from '../Controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register new user
router.post('/register', registerUser);

// @route   POST /api/auth/login
// @desc    Login user and get token
router.post('/login', loginUser);

// @route   GET /api/auth/me
// @desc    Get current logged-in user info
// @access  Private
router.get('/me', protect, getCurrentUser);

// (Optional) Logout route (only if token is stored server-side, usually in cookies)
router.post('/logout', logoutUser);

export default router;



