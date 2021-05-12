import {update_product} from '../models/update_product.js';
export const upd_product = (req,res) => {
    let {id} = req.params;
    let {code,model,brand,color,price,description,stock,date,hour} = req.body;
    if(code.length == 0 || model.length == 0 || brand.length == 0 || color.length == 0 || price.length == 0 || description.length == 0 || date.length == 0 || hour.length == 0 || stock.length == 0) return res.status(404).json({msg:"error"});
    let prod_updated = {
	    code:code,
	    model:model,
	    brand:brand,
	    color:color,
	    price:price,
	    description:description,
	    stock:stock,
	    date:date,
	    hour:hour
    }
    update_product(id,prod_updated);
    return res.status(200).json({msg:"ok"});   
}
