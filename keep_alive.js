const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('RockFire is Alive!'));

app.listen(port, () => console.log(`RockFire is listening to http://localhost:${port}`));