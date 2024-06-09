const express = require('express');
const router = express.Router();
const geminiController = require('../controllers/geminiController');
const chatController = require('../controllers/chatController');

router.post('/gemini', geminiController.getResponseChatGemini);
router.post('/openai', chatController.getResponseChat);


module.exports = router;