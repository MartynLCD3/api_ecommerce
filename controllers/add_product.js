import {create_product} from '../models/create_product.js';
export const add_product = (req,res) => {
    let {code,model,brand,color,price,description} = req;
    try{
        if(code.length != 0 &&  model.length != 0 && brand.length != 0 && color.length != 0 && price.length != 0 && description.length != 0){
            let date = new Date().toDateString();
            let hour = new Date().getHours();
            let minutes = new Date().getMinutes();
            let fullHour;
            hour < 12 ? fullHour = `${hour}:${minutes} am` : fullHour = `${hour}:${minutes} pm`
            let prodInfo = {code:code,model:model,brand:brand,color:color,price:price,description:description,date:date,hour:fullHour};
            create_product(prodInfo,res);
        }else{
            return res.json({msg:"error"});
        }
    }catch(error){
        return res.json({msg:"error"});
    }
};
