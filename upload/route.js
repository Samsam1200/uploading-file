const express = require('express');
const router = express.Router();
const store = require('./middleWare/multer')
const presn =  require('./controller')

router.post('/addUser',store.single('image'),presn.addUser)

module.exports = router;
