const {asyncWrap} = require('../utils/error');
const {recruitService} = require('../services');

const addRecruit = asyncWrap(async(req, res) => {
    const {companyName, nation, region, position, reward, content, skill} = req.body;

    if (!companyName || !nation || !region || !position || !reward || !content || !skill) {
        const error = new Error('KEY_ERROR');
        error.statusCode = 400;
        throw error;
    }

    await recruitService.addRecruit(companyName, nation, region, position, reward, content, skill);
    res.status(201).json({ message:'Recruit added successfully' });
})

const updateRecruit = asyncWrap(async(req, res) => {
    const {contents} = req.body;

    if (!contents) {
        const error = new Error('KEY_ERROR');
        error.statusCode = 400;
        throw error;
    }

    await recruitService.updateRecruit(contents);
    res.status(204).send()
})

const deleteRecruit = asyncWrap(async(req, res) => {
    const {recruitId} = req.query;

    await recruitService.deleteRecruit(recruitId);
    res.status(204).send();
})

const getRecruit = asyncWrap(async(req, res) => {
    const {search} = req.query;

    const recruit = await recruitService.getRecruit(search);
    res.status(200).json({ recruit }) 
})

const getRecruitDetail = asyncWrap(async(req, res) => {
    const {recruitId} = req.params;

    const recruit = await recruitService.getRecruitDetail(+recruitId);
    res.status(200).json({ recruit });
})

module.exports = {
    addRecruit,
    updateRecruit,
    deleteRecruit,
    getRecruit,
    getRecruitDetail
}