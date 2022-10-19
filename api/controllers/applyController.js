const {asyncWrap} = require('../utils/error');
const {applyService} = require('../services');

const addApplyment = asyncWrap(async(req, res) => {
    const {recruitId, userId} = req.body;

    if (!recruitId || !userId) {
        const error = new Error('KEY_ERROR');
        error.statusCode(400);
        throw error;
    }

    await applyService.addApplyment(recruitId, userId);
    res.status(201).json({ message:`Applyment added successfully`})
})

module.exports = {
    addApplyment
}