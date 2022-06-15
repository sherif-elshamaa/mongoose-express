const person = require('../models/person');

const removeById = async (req, res) => {
    const { id } = req.query
    console.log(id)
    try {
        const removed = await person.findByIdAndRemove(id)
        res.status(201).send(removed)
    } catch (error) {
        console.log(error)
    }
}

module.exports = removeById