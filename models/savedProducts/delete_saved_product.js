import {savedProdConf} from './event_product_model.js';
export const delete_saved_product = async (id) => {
	await savedProdConf.deleteOne({"idEvent":id});
	await savedProdConf.deleteOne({"_id":id});
}
