const {dataSource} = require('./data-source');

const checkApplyment = async(userId) => {
    const [result] = await dataSource.query(
        `SELECT EXISTS(
            SELECT *
            FROM applyments
            WHERE user_id = ?
        ) as a
        `, [userId]
    )
    return result.a
}

const addApplymentData = async(recruitId, userId) => {
    const result = await dataSource.query(
        `INSERT INTO applyments(
            recruit_id,
            user_id
        ) VALUES (?, ?)
        `, [recruitId, userId]
    )
    return result
}

module.exports = {
    checkApplyment,
    addApplymentData
}