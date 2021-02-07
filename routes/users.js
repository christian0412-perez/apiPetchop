var express = require('express');
var router = express.Router();
const userService = require('../controllers/usersService')
router.get('/usernameValidate/:username',userService.usernameValidate);
router.get('/getAllUsers',userService.getAllUsers);
router.post('/signup', userService.signup);
router.delete('/deleteUser/:username',userService.deleteUser)


module.exports = router;
