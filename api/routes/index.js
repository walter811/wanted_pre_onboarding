const express = require('express');

const recruitRouter = require('./recruitRouter');
const applyRouter = require('./applyRouter');

const router = express.Router();

router.use('/recruit', recruitRouter);
router.use ('/apply', applyRouter);

module.exports = router;