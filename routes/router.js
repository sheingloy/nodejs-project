const express = require('express'); 
const router = express.Router();
const main = require('../controller/Maincontroller');

router.get('/', main.index);
router.get('/about', main.about);
router.get('/contact', main.contact);
router.get('/service', main.service);
router.get('/vmgo', main.vmgo);

module.exports = router;