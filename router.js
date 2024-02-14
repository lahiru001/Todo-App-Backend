const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { default: mongoose } = require('mongoose');
const {model} = require('mongoose');

router.get('/tasks',controller.getTasks);
router.post('/addtask',controller.addTask);
router.post('/updatetask',controller.updateTask);
router.post('/deletetask',controller.deleteTask);

module.exports = router;