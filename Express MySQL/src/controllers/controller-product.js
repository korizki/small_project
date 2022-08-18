const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err)
})

module.exports = {
    // get all data product
    getDataProduct(req, res){
        pool.getConnection((err, connection) => {
            if(err){ throw new err};
            connection.query(
                `SELECT * FROM product; `, function(error, results){
                    if(error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil get Data',
                        data: results
                    })
                }
            )
            connection.release();
        })
    },

    // get data product by id
    getProductbyID(req, res){
        let id = req.params.id;
        pool.getConnection((err, connection) => {
            if(err){throw new err};
            connection.query(
                `SELECT * FROM product where product_id = ?`,
                [id],
                function(err, results){
                    res.send({
                        success: true,
                        message: 'Berhasil get data product ',
                        data: results
                    })
                }
            )
            connection.release()
        })
    },

    // menambahkan product baru
    addNewProduct(req, res){
        let data = {
            product_id : '',
            product_name : req.body.name,
            product_description : req.body.description,
            product_type : req.body.type,
            price : req.body.price
        }
        pool.getConnection(function(err, connection){
            if(err) throw new err;
            connection.query(`INSERT INTO product SET ?`, [data], 
            function(err, results){
                if(err) throw err;
                res.send({
                    success: true,
                    message: 'Berhasil menambahkan product'
                })
            })
            connection.release()
        })
    },

    //edit data product
    editProduct(req, res){
        let dataEdit = {
            product_name : req.body.name,
            product_description: req.body.description,
            product_type : req.body.type,
            price : req.body.price
        }
        let id = req.params.id
        pool.getConnection(function(err,connection){
            if(err) throw err;
            connection.query(`
                UPDATE product SET ? WHERE product_id = ?
            `, [dataEdit, id], 
            function(err, results){
                if(err) throw err;
                res.send({
                    success: true,
                    message: 'Product berhasil diedit'
                })
            })
            connection.release()
        })
    },

    // delete product
    deleteProduct(req, res){
        let id = req.params.id
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query(` DELETE FROM product WHERE product_id = ?`, [id],
            function(err, results){
                if(err) throw err;
                res.send({
                    success: true,
                    message: 'Product berhasil dihapus'
                })
            })
        })
    }
}