const express = require('express');
const app = express();
const { postDataUserHandler } = require('./handlers/post-data');
const { getDataUserHandler } = require('./handlers/get-data');

app.use(express.static('public'));
app.use(express.json());

app.get('/api/user', getDataUserHandler);
app.post('/api/user', postDataUserHandler);

const port = 3000;

const server = app.listen(port, () => {
    console.log("Halo cuyy, Server sudah jalan di http://localhost:" + port)
});

module.exports = server;

console.log("test")