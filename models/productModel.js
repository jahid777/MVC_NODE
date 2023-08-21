const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;





/*
this is for dishco food data structure
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  image: String,
  name: String,
  foodCode: String,
  stock: Number,
  foodDescription: String,
  categories: String,
  subCategories: String,
  childCategories: String,
  addonsItem: [
    {
      addonName: String,
      addonPrice: Number,
    },
  ],
  sizePriceItem: [
    {
      size: String,
      price: Number,
    },
  ],
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
*/
