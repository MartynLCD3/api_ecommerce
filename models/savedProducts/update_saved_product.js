import {savedProdConf} from './event_product_model.js';
export const update_saved_product = async (id,data) => {
	await savedProdConf.updateOne({"_id":id},{$set:data});
}
