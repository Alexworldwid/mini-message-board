const {Router} = require('express');

const newMessageRouter = Router();
const messages = require('../messages');

newMessageRouter.get('/', (req, res) => {
    res.render('form', { title: 'Create New Message' });
})

newMessageRouter.get('/:id', (req, res) => {
    const messageId = req.params.id;

    const message = messages[messageId];

    if (message) {
        res.render('viewMessages', { message: message });
    } else {
        res.status(404).send('Message not found');
    }
})

newMessageRouter.post('/', (req, res) => {
    const { text, user } = req.body;
    messages.push({ text, user, added: new Date() });
    res.redirect('/');
})

module.exports = newMessageRouter;