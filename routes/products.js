const express = require('express');
const router = express.Router();

const { 

	getProducts,
	getProductById,
	addProductByName,
	updateProductById,
	deleteProductById,
	
	 } = require('../controllers/cont');

//methods HTTP 

router.route('/') //url of /products defined in index.js
	.get(getProducts)
	.post(addProductByName);

router.route('/:id')
	.get(getProductById)
	.put(updateProductById)
	.delete(deleteProductById);

module.exports = router;