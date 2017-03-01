var mongoose = require('mongoose');
console.log('product model');
var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true, "Please provide Product Name"],
    trim: true
  },
  description: {
    type: String,
    required:[true, "Please provide Product Description"],
    trim: true
  },
  category: { type: String,
    enum: {
      values: ['PHONE', 'PRINTER'],
      message: 'Options are Phone and Printer!'
    },
    uppercase: true,
    trim: true,
    message: "Please choose form either phone or printer",
    required: [true, "Please choose a category"]
  },
  price: {
        type: Number,
        required: [true, "Please provide Product Price"]
      },
  image: {
        type: String,
        required: [true, "Please provide Image Link"]
        }
})
var Product = mongoose.model('Product', ProductSchema);
