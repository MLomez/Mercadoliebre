const express = require ("express");
const path = require ("path");

let app= express ();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/views/home.html'));  
});

app.listen(3000, function () {
    console.log("Servidor Corriendo");
})
 
