import {read_saved_products} from '../../models/savedProducts/read_saved_products.js';
export const get_saved_products = (req,res) => {
	Promise.all([read_saved_products()]).then(objs => {
		let [saved_products] = objs;
		let info = [];
		for(let n of saved_products){
			let {_id,eventName,code,model,brand,color,price,description,stock,day} = n
			let data = {
				id:_id,
				eventName:eventName,
				code:code,
				model:model,
				brand:brand,
				color:color,
				price:price,
				description:description,
				stock:stock,
				day:day,
			}
			info.push(data)
		}
		res.status(200).json(info);
	});
}
