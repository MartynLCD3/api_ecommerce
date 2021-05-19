import {update_saved_product} from '../../models/savedProducts/update_saved_product.js';
export const upd_saved_product = (req,res) => {
	let {id} = req.params;
	let {code,model,brand,color,price,description,stock} = req.body;
	if(!code) return res.status(200).json({msg:"error"});
	let info = {
		code:code,
		model:model,
		brand:brand,
		color:color,
		price:price,
		description:description,
		stock:stock
	}
	update_saved_product(id,info);
	res.status(200).json({msg:"ok"});
}
