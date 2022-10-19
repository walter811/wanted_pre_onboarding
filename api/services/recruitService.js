const {recruitDao} = require('../models');

const addRecruit = async(companyName, nation, region, position, reward, content, skill) => {
    return await recruitDao.addRecruitData(companyName, nation, region, position, reward, content, skill)
}

const updateRecruit = async(contents) => {
    const recruitId = contents.id;
    const check = recruitDao.checkRecruitById(recruitId);

    if (check === '0') {
        const error = new Error('INVALID_RECRUIT');
        error.statusCode(404);
        throw error;
    }

    return await recruitDao.updateRecruitData(+recruitId, contents);
}

const deleteRecruit = async(recruitId) => {
    const check = recruitDao.checkRecruitById(companyId);

    if (check === '0') {
        const error = new Error('INVALID_RECRUIT');
        error.statusCode(404);
        throw error;
    }

    return await recruitDao.deleteRecruitData(recruitId);
}

const getRecruit = async(search) => {
    return await recruitDao.getRecruitData(search);
}

const getRecruitDetail = async(recruitId) => {
    return await recruitDao.getRecruitDetailData(recruitId);
}

module.exports = {
    addRecruit,
    updateRecruit,
    deleteRecruit,
    getRecruit,
    getRecruitDetail
}