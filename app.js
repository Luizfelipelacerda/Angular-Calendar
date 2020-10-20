const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.static(__dirname + '/src'));
app.get('/*', (req, res)=>{
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(PORT, ()=>{
    console.log('servidor Iniciado na porta '+ PORT);

})