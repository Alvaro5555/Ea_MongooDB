require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {
    const result = await Product.findByIdAndDelete('5e290e03a1def223d14123241gfer');
    

    console.log(result);

};

someFunction();