const Person = require('../models/person')

async function createPerson(name, age, favArray) {
    // this function add one new person to people collection
    try {
        const person = await new Person({
            name: name,
            age: age,
            favoriteFoods:favArray
        })
        person.save();
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = createPerson;