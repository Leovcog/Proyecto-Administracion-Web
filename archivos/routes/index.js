const express = require('express');
const router = express.Router();
const mongodb = require('../bd/conexion');
 

router.get('/', async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('Productos').find();
    console.log('Vista Productos');
    console.log(result);
    result.toArray().then((productos) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(productos);
    });
});

module.exports = router;