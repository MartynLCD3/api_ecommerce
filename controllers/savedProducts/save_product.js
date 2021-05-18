import {create_save_product} from '../../models/savedProducts/create_save_product.js';
export const save_product = (req,res) => {
   let {idEvent,code,model,brand,color,price,description,stock,day,check} = req;
   if(!code) return res.status(200).json({msg:"error"});
   let info = {
	idEvent:idEvent,
	code:code,
	model:model,
	brand:brand,
	color:color,
	price:price,
	description:description,
	stock:stock,
	day:day,
	check:check
   }
   create_save_product(info);	
   res.status(200).json({msg:"ok"});
}
