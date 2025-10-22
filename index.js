const express = require('express')
const app = express();
const port = 3000;
app.use(express.json());

app.get('/inicio', (req,res) =>{
    res.send('¡hola, mundo!');
});
app.listen(port,() =>{
    console.log('servidor inicializado en http://localhost:'  + port + "/inicio");
});