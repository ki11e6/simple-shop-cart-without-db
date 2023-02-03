const express = require('express');
const path = require('path');

const rootDir = require('../util/path')
const adminController = require('../controllers/admin')
const router = express.Router();


// /admin/add-product =>get
router.get('/add-product', adminController.getAddProduct)

router.get('/products', adminController.getProducts)

// /admin/add-product =>post
router.post('/add-product', adminController.postAddProduct)

router.get('/edit-product/:productId', adminController.getEditProduct)

router.post('/edit-product', adminController.postEditProduct)

router.post('/delete-product', adminController.postDeleteProduct)
// module.exports = router;
exports.routes = router;
// exports.products = products;