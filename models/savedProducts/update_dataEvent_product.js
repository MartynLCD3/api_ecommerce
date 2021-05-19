import {savedProdConf} from './event_product_model.js';
export const update_dataEvent_product = async (id,data) => {
	console.log(id,data)
	await savedProdConf.updateOne({"idEvent":id},{$set:data});
}
