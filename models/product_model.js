import mongoose from 'mongoose';
const productsSchema = new mongoose.Schema({
    codigo: String,
    modelo: String,
    marca: String,
    color: String,
    precio: Number,
    descripcion: String,
    fecha: String,
    hora: String
});
export const product = mongoose.model('products', productsSchema);