import express from 'express';
import cors from 'cors';
import {connection} from './config/connection.js';
import {add_product} from './controllers/add_product.js';
import {get_products} from './controllers/get_products.js';
import {upd_product} from './controllers/upd_product.js';
import {del_product} from './controllers/del_product.js';
import {save_product} from './controllers/savedProducts/save_product.js';
import {del_saved_product} from './controllers/savedProducts/del_saved_product.js';
import {del_saved_product_id} from './controllers/savedProducts/del_saved_product_id.js';
import {control_saved_products} from './controllers/savedProducts/control_saved_products.js';
import {get_saved_products} from './controllers/savedProducts/get_saved_products.js';
import {upd_saved_product} from './controllers/savedProducts/upd_saved_product.js';
import {upd_dataEvent_product} from './controllers/savedProducts/upd_dataEvent_product.js';

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

router.get('/',cors(),(req,res) => {
    res.status(200).json({status:"ok"});
});

router.get('/products',cors(),(req,res) => {
    Promise.all([get_products()]).then(objects => {
        let [products] = objects;
        res.status(200).json(products);
    })
});

router.post('/new_product',cors(),(req,res) => {
    add_product(req.body,res);
});

router.put('/:id',cors(),(req,res) => {
    upd_product(req,res);
});

router.delete('/:id',cors(),(req,res) => {
    del_product(req,res);
});

router.post('/save_product',cors(),(req,res)=>{
    save_product(req.body,res);
});

router.get('/get_saved_products',cors(),(req,res)=>{
    get_saved_products(req,res);
});

router.put('/saved/:id',cors(),(req,res)=>{
   upd_saved_product(req,res);
});

router.put('/saved/event/:id',cors(),(req,res)=>{
   upd_dataEvent_product(req,res);
});

router.delete('/saved/:id',cors(),(req,res)=>{
   del_saved_product(req,res);
});

router.delete('/saved/identifier/:id',cors(),(req,res)=>{
   del_saved_product_id(req,res);
})

app.use('/api',router);
app.get('*',(req,res) => {
    res.status(404).json({msg:"error"});
});

const port = process.env.PORT || 3000;
app.set('PORT',port);
const server = app.listen(app.get('PORT'), () => console.log(`Servidor iniciado en el puerto ${server.address().port}`));
server.on('error', error => console.log(`Message: ${error}`));
