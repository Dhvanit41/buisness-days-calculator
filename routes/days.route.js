const express = require('express');
const router = express.Router();
const daysController = require('../controller/days.controller');

router.get('/calculate-buisnessDays', daysController.getBuisnessDaysBetweenTwoDates);

module.exports = router;
