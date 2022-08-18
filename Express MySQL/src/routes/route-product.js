// inisialisasi variabel router menggunakan modul express Router
const router = require('express').Router();
//  menggunakan file index folder controllers
const {product} = require('../controllers');


// get localhost:8080 ambil data semua product
router.get('/product', product.getDataProduct)
// mengambil data product dengan id tertentu
router.get('/product/:id', product.getProductbyID);
// menambahkan data product baru 
router.post('/product/add', product.addNewProduct);
// update data product
router.put('/product/:id', product.editProduct);
// delete product
router.delete('/product/:id', product.deleteProduct);

// export module router
module.exports = router;
