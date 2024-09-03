const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.get('/', async (req, res) => {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(10);
    res.render('index', { messages });
});

router.get('/chat', (req, res) => {
    res.render('chat');
});

module.exports = router;
