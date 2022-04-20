const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world all time my world')
})


const users = [
    { id: "1", name: "Abdul ", email: "abdul@gmail.com", phone: "0145523344" },
    { id: "2", name: " awal ", email: "awal@gmail.com", phone: "0145523344" },
    { id: "3", name: " suhial ", email: "suhial@gmail.com", phone: "0145523344" },
    { id: "4", name: " abdullah", email: "abdulllah@gmail.com", phone: "0145523344" }
]

/* app.get('/user', (req, res) => {
    res.send(users)
}) */

// filter by search query parameter

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
});


app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});




app.listen(port, () => {
    console.log('listening to port', port);
})
