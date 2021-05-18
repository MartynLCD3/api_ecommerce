import mongoose from 'mongoose';
const saveProductSchema = new mongoose.Schema({
   idEvent: String,
   code: String,
   model: String,
   brand: String,
   color: String,
   price: Number,
   description: String,
   stock: String,
   day: String,
   check: String
});
export const savedProdConf = mongoose.model('savedProducts',saveProductSchema);
