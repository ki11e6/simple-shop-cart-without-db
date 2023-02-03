const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
}

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body)
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(null, title, imageUrl, price, description)
    product.save();
    res.redirect('/');
}

exports.getEditProduct = (req, res, next) => {
    const editMod = (req.query.edit === 'true');
    // console.log(editMod)
    if (!editMod) return res.redirect('/');
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        if (!product) {
            return res.redirect('/')
        }
        res.render("admin/edit-product", {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMod,
            product: product
        });
    })
}

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTile = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    const updatedProduct = new Product(
        prodId,
        updatedTile,
        updatedImageUrl,
        updatedPrice,
        updatedDesc,
    );
    console.log(updatedProduct);
    updatedProduct.save();
    res.redirect('/admin/products')
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            pageTitle: 'Admin Products',
            prods: products,
            path: '/admin/products'
        })
    });
}

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId);
    res.redirect('/admin/products');
}