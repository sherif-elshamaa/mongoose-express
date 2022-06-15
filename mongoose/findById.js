const Person = require('../models/person')

async function findPersonById(req, res) {
    // this function take req and res as an argument
    // this function find one persons matching the req.query.id on people collection
    
    const id = req.query.id
    console.log(id)
    try {
        const person = await Person.findById(id);
        res.send(person)
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findPersonById;