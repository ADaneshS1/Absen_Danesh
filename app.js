const express = require('express');
const { postDataUserHandler } = require('./handlers/post-data');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/api/user', postDataUserHandler);

const port = 3011;

const server = app.listen(port, () => {
    console.log("Halo cuyy, Server sudah jalan di http://localhost:" + port)
});

module.exports = server;