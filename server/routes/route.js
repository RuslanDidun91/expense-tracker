const routes = require('express').Router();
const controller = require('../controllers/controller');

routes.route('/api/categories')
.post(controller.createCategories)
.get(controller.getCategories)
.post(controller.createCategories)


module.exports = routes