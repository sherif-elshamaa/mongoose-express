const Person = require('../models/person')

async function createPerson(req,res) {
    // this function add one new person to people collection
    const {newPerson} = req.body
    try {
        const person = await new Person(newPerson)
        person.save();
        res.status(200).send(person)
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = createPerson;