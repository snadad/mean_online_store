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
    uppercase: true,
    trim: true,
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
}, { timestamps: { createdAt: 'created_at' } })
var Product = mongoose.model('Product', ProductSchema);
