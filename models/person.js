let mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchem = new Schema({
    name:{
        type: 'string',
        required: true,
    },
    age: Number,
    favoriteFoods:[String],
    createdAt: {
        type: Date,
        default: ()=> Date.now(),
    },
    updatedAt:{
        type: Date,
        default: ()=> Date.now(),
    }
})

module.exports = mongoose.model('Person', personSchem);