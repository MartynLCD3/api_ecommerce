import {savedProdConf} from './event_product_model.js';
export const delete_saved_product_id = async (id) => {
	await savedProdConf.deleteOne({"_id":id});
}
