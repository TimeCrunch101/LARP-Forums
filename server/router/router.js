const express = require('express');
const viewController = require('../controllers/viewController')

const router = express.Router();

let initWebRoutes = (app) => {

    router.get('/', viewController.homeView);
    router.get('/my_profile', viewController.my_profile);
    router.get('/upcoming_events', viewController.upcoming_events);
    router.get('/rules', viewController.rules);
    router.get('/lore', viewController.lore);
    router.get('/paypal', viewController.paypal);
    router.get('/edit/profile', viewController.edit_profile);
    router.get('/forums', viewController.forums);

    return app.use('/', router)
};

module.exports = router;
module.exports = initWebRoutes;
