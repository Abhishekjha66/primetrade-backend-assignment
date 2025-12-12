const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const { protect, authorize } = require('../middlewares/auth.middleware');

// Create task (user only, but admin can also create if needed)
router.post('/', protect, taskController.createTask);

// Get tasks
// Admin → sees all tasks
// User → sees only their own tasks
router.get('/', protect, taskController.getTasks);

// Update task (only if owner OR admin)
router.put('/:id', protect, taskController.updateTask);

// Delete task (only if owner OR admin)
router.delete('/:id', protect, taskController.deleteTask);

module.exports = router;
