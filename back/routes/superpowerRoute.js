const { Router } = require('express');
const PowerController = require('../controllers/Superpower.controller');

const powerRouter = Router();

powerRouter.post('/', PowerController.createSuperpower);

powerRouter.get('/', PowerController.getAllSuperpowers);

module.exports = powerRouter;
