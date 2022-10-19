const {applyDao} = require('../models');

const addApplyment = async(recruitId, userId) => {
    const check = await applyDao.checkApplyment(userId);

    if (check !== '0') {
        const error = new Error('APPLYMENT_OVERLAPED');
        error.statusCode = 400;
        throw error;
    }

    return await applyDao.addApplymentData(recruitId, userId);
}

module.exports = {
    addApplyment
}