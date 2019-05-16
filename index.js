
const morgan = require('morgan');
const bodyParser = require('body-parser');


const express = require('express');
const app = express();

const productRoutes = require('./routes/products.js');

//settings
app.set('json spaces', 4); //json format 


//middleware
app.use(morgan('dev'));  //view methods in console
app.use(bodyParser.json());


//routes
//we are going to attack with http methods -> localhost:3000/products
//lo hacemos de la siguiente manera
app.use('/products', productRoutes);


//start server

app.listen('3000', () => {
	console.log('server on port', 3000);
});
