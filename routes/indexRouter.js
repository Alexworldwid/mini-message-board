const {Router} = require('express'); 

const homepageRouter = Router();
const messages = require('../messages');

homepageRouter.get('/', (req, res) => {
    res.render('index', { title: 'Hompage', messages: messages });
})

module.exports = homepageRouter;