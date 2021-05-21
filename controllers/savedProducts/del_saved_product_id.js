import {delete_saved_product_id} from '../../models/savedProducts/delete_saved_product_id.js';
export const del_saved_product_id = (req,res) => {
	let {id} = req.params
   	delete_saved_product_id(id);
   	res.status(200).json({msg:"ok"});
}
