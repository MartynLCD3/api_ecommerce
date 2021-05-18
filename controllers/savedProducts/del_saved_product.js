import {delete_saved_product} from '../../models/savedProducts/delete_saved_product.js';
export const del_saved_product = (req,res) => {
	let {id} = req.params
   	delete_saved_product(id);
   	res.status(200).json({msg:"ok"});
}
