import {update_dataEvent_product} from '../../models/savedProducts/update_dataEvent_product.js';
export const upd_dataEvent_product = (req,res) => {
	let {id} = req.params;
	let {name,start} = req.body;
	let info = {
		eventName:name,
		day:start
	}
	update_dataEvent_product(id,info)
	res.status(200).json({msg:"ok"});
}
