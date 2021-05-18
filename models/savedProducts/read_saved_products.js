import {savedProdConf} from './event_product_model.js';
export const read_saved_products = async () => {
   const saved_product_list = await savedProdConf.find({},{"__v":0},(err)=>{
	if(err) throw new Error(`Error: ${error}`);
   }).lean();
   return saved_product_list;
}
