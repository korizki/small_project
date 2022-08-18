// define module express
const express = require('express');
// define module bodyparser
const bodyparser = require('body-parser');
// define app menggunakan module express
const app = express();
// define cors
const cors = require('cors');
// define port 
const port = 8080;
// menggunakan module body parser dan cors
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true,
}))
app.use(cors())
// 
const appRoute = require('./src/routes/route-product')
// mengembalikan pesan ok jika berhasil ke request yang diminta
app.use('/', appRoute);
// identifikasi port 
app.listen(port, () => {
    console.log('Listening in port ',port)
})