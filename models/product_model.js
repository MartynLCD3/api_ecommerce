import mongoose from 'mongoose';
const productsSchema = new mongoose.Schema({
    code: String,
    model: String,
    brand: String,
    color: String,
    price: Number,
    description: String,
    stock: Number,
    date: String,
    hour: String
});
export const product = mongoose.model('products', productsSchema);
