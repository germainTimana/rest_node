

const express = require('express');
const app = express();

//midelware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use(require('./rutas/index-rutas'))

//

app.listen(3000);
console.log("Servidor corriendo por el puerto 3000")



//video fuente : https://www.youtube.com/watch?v=7NfvC-gOcRc