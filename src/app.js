const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('2da Instancia de Evaluación | Ingeniería de Sofware\nCHAMORRO, Ian3');
});

app.listen(port, () => {
    console.log(`This app is listening in port: ${port}`);
});