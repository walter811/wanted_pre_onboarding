const express = require('express');
const {applyController} = require('../controllers');

const applyRouter = express.Router();

applyRouter.post('', applyController.addApplyment);

module.exports = applyRouter;