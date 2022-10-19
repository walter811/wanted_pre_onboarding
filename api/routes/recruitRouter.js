const express = require('express');
const {recruitController} = require('../controllers');

const recruitRouter = express.Router();

recruitRouter.post('', recruitController.addRecruit);
recruitRouter.patch('', recruitController.updateRecruit);
recruitRouter.delete('', recruitController.deleteRecruit);
recruitRouter.get('', recruitController.getRecruit);
recruitRouter.get('/:recruitId', recruitController.getRecruitDetail);

module.exports = recruitRouter;