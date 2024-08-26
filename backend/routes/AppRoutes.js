const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/controller');

// Existing routes
router.get('/categories', categoryController.getAllCategories);
// router.put('/categories/:categoryName/widgets/:widgetId', categoryController.updateWidgetByCategory);

// Route to add widgets to an existing category
router.post('/categories/:categoryName/widget', categoryController.addWidgetToCategory);
router.put('/widget/update-widget-status', categoryController.updateWidgetStatus);
module.exports = router;
