const { products } = require('../db.json'); 

console.log(products);

module.exports =  {

	//route -> localhost:3000/products

	getProducts: (req,res) => {
		res.json({products})
	},

	addProductByName: (req,res) => {  
		
		const {name} = req.body;
		products.push({
			id: products.length+1,
			name			
		});

		res.json({
			'success': true,
			'msg': 'successfully Added'
		});
	},

	//route -> localhost:3000/products/{id}

	getProductById: (req,res) => {
		
		const {id} = req.params;


		if( id > 0 && id < products.length+1){
			
			products.forEach((product,i) => {
				if(product.id === Number(id)){
					res.json({
						'id': id,
						'name': product.name
					});
				}
			});

		}else{
			res.status(404);
			res.json({
				'success': false,
				'msg': 'We dont have it, try it again please'
			});
		}
		

	},

	updateProductById: (req, res) =>{

		const {id} = req.params;
		const {name} = req.body;

		if( id > 0 && id < products.length+1){

			products.forEach((product, i) => {
				if(product.id === Number(id)){
					product.name = name;
				}
			});

			res.json({
				'success': true,
				'msg': 'successfully Updated'
			});

		}else{
			res.status(404);
			res.json({
				'success': false,
				'msg': 'We dont have it, try it again please'
			});

			
		}
	},

	deleteProductById: (req, res) =>{

		const {id} = req.params;

		var new_id = Number(id);

		if( id > 0 && id < products.length+1){
		
			products.forEach((product, i) => {
				if(product.id === Number(id)){
					products.splice(i,1);
				}
			});

			products.forEach((product, i) => {
				if(product.id === new_id + 1 && new_id < products.length+1){
					product.id = new_id;
					new_id = new_id + 1;
				}

			});


			res.json({
				'success': true,
				'msg': 'successfully Deleted'
			});

		}else{
			res.status(404);
			res.json({
				'success': false,
				'msg': 'We dont have it, try it again please'
			});

			

		}
	}
};