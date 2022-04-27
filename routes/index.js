const express = require('express');
const router = express.Router();
const daysRoute = require('./days.route');

const routes = [{
    path: '/',
    route: daysRoute
}]

routes.forEach((route) => {
    router.use(route.path, route.route);
});
module.exports = router;
