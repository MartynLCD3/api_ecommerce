import {savedProdConf} from './event_product_model.js';
export const create_save_product = (data) => {
	const newSavedProduct = new savedProdConf(data);
	newSavedProduct.save(err => {
	   if(err) throw new Error(`Error: ${err}`);
	});
}
