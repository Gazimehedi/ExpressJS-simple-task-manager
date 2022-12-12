const express = require('express');
const { GetTasks, CreateTask, GetTask, UpdateTask, DeleteTask } = require('../controllers/TaskController');
const router = express.Router();

router.get('/tasks',GetTasks);
router.post('/task-create',CreateTask);
router.get('/task/:id',GetTask);
router.put('/task-update/:id',UpdateTask);
router.delete('/task-delete/:id',DeleteTask);

module.exports = router;