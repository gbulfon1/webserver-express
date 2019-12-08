
// node incluye esta libreria
const http = require('http');

// crear el servidor
http.createServer( (req,res )=> {

    res.writeHead(200,{'Content-Type':'application/json'});

    let salida = {
        nombre: 'gabriel',
        edad: 50,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    // res.write('Hola mundo');
    res.end();

})
.listen(8080);

console.log('Escuchando el port 8080...');
