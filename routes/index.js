var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router.route('/v1/users')
  .post(userController.postUsers)
  .get(userController.getUsers)

router.route('/v1/users/:id')
  .get(userController.getbyUsename)

router.route('/v1/users/update/:id')
	.put(userController.updateUsers)
	.delete(userController.deleteUsers)

module.exports = router;
