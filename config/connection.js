import mongoose from 'mongoose';
export const connection = (() => mongoose.connect('mongodb://localhost/baseProducts', {
  useNewUrlParser:true,
  useUnifiedTopology:true
}, err => {
    if(err) throw new Error(`Error: ${err}`)
    console.log('Base de datos conectada');
}))();
