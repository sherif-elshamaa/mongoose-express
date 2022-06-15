require('dotenv').config({ path: './config.env' });
const express = require('express');
const mongoose = require('mongoose');
const createMany = require('./mongoose/createMany');
const app = express();
const PORT = process.env.PORT || 4000;
const createPerson = require('./mongoose/createPerson')
const findById = require('./mongoose/findById')
const remove = require('./mongoose/removeById')


mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to db')
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/createmany", createMany)
app.post('/remove', remove)

app.get('/', (req, res) => {
    res.status(201).json({ message: "Welcome to MYAPI", status: 201 })
});

app.post('/', (req, res) => {
    const { name, age, favArray } = req.body;
    if (name && age && favArray) {
        createPerson(name, age, favArray)
    }
    console.log({ name, age, favArray });
    res.send({ name, age, favArray });
})

app.get('/find', findById)

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));