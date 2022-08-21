const express = require('express');
const app = express();

app.use(express.json());


app.post('/api/v1/classes', (req, res) => {
    const data = req.body;
    res.status(200).send(data);
})










app.listen('3001', () => console.log('Server started on port 3001'));