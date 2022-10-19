const {dataSource} = require('./data-source');

const checkRecruitById = async(recruitId) => {
    const [result] = await dataSource.query(
        `SELECT EXISTS(
            SELECT *
            FROM recruits
            WHERE id = ?
        ) as a
        `, [recruitId]
    )

    return result.a;
}

const getCompanyName = async(recruitId) => {
    const [result] = await dataSource.query(
        `SELECT company_name
        FROM recruits
        WHERE id = ?
        `, [recruitId]
    )

    return result.company_name;
}

const addRecruitData = async(companyName, nation, region, position, reward, content, skill) => {
    const result = await dataSource.query(
        `INSERT INTO recruits (
            company_name,
            nation,
            region,
            position,
            reward,
            content,
            skill
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `
        , [companyName, nation, region, position, reward, content, skill]
    )

    return result;
}

const updateRecruitData = async(recruitId, contents) => {
    tmp = "";

    if (contents.companyName) {
        tmp += ` company_name = "${contents.companyName}",`
    }
    if (contents.nation) {
        tmp += ` nation = "${contents.nation}",`
    }
    if (contents.region) {
        tmp += ` region = "${contents.region}",`
    }
    if (contents.position) {
        tmp += ` position = "${contents.position}",`
    }
    if (contents.reward) {
        tmp += ` reward = ${contents.reward},`
    }
    if (contents.content) {
        tmp += ` content = "${contents.content}",`
    }
    if (contents.skill) {
        tmp += ` skill = "${contents.skill}",`
    }
    tmp = tmp.slice(0,-1);
    
    const result = await dataSource.query(
        `UPDATE recruits
        SET ${tmp}
        WHERE id = ?
        `, [recruitId]
    )

    return result;
}

const deleteRecruitData = async(recruitId) => {
    const result = await dataSource.query(
        `DELETE FROM recruits
        WHERE id = ?
        `, [recruitId]
    )

    return result;
}

const getRecruitData = async(search) => {
    let tmp = `SELECT id, company_name, nation, region, position, reward, skill FROM recruits`

    if (search) {
        tmp += ` WHERE company_name LIKE "%${search}%" OR skill LIKE "%${search}%"`
    }

    const result = await dataSource.query(
        `${tmp}`
    )

    return result;
}

const getRecruitDetailData = async(recruitId) => {
    const companyName = await getCompanyName(recruitId)
    
    const result = await dataSource.query(
        `SELECT
            id as recruitId,
            company_name as companyName,
            nation,
            region,
            position,
            reward,
            skill,
            content,
            (
                SELECT JSON_ARRAYAGG(r.id)
                FROM recruits as r
                WHERE r.company_name = ?
            ) as idList
        FROM recruits
        WHERE id = ?
        `, [companyName, recruitId]
    )

    return result;
}

module.exports = {
    checkRecruitById,
    getCompanyName,
    addRecruitData,
    updateRecruitData,
    deleteRecruitData,
    getRecruitData,
    getRecruitDetailData
}