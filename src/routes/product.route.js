const express = require('express');
const router = express.Router();

const { getProductDetail } = require('../controllers/product.ctrl')

router.get('/:id', getProductDetail);

module.exports = router;
