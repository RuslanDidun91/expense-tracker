const routes = require('express').Router();
const controller = require('../controllers/controller');

//categories route
routes.route('/api/categories')
  .post(controller.createCategories)
  .get(controller.getCategories)

//transactions route
routes.route('/api/transaction')
  .post(controller.createTransaction)
  .get(controller.getTransaction)
  .delete(controller.deleteTransaction)

//agrigate route
routes.route('/api/labels')
  .get(controller.getLabels)

module.exports = routes