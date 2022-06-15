const person = require('../models/person');

const createMany = async (req, res) => {
    const { array } = req.body
    try {
        const arr = await person.create(personArray);
        console.log(arr);
        res.status(200).send(arr);
    } catch (error) {
        console.log(error);
    }
}

module.exports = createMany