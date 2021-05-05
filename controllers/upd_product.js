import {update_product} from '../models/update_product.js';
export const upd_product = (req,res) => {
    let {id} = req.params;
    let {codigo,modelo,marca,color,precio,descripcion,fecha,hora} = req.body;
    try{
        if(codigo.length != 0 &&  modelo.length != 0 && marca.length != 0 && color.length != 0 && precio.length != 0 && descripcion.length != 0 && fecha.length != 0 && hora.length != 0){
            let prod_updated = {codigo:codigo,modelo:modelo,marca:marca,color:color,precio:precio,descripcion:descripcion,fecha:fecha,hora:hora};
            update_product(id,prod_updated,res);
        }else{
            return res.json({msg:"error"});
        }
    }catch(error){
        return res.json({msg:"error"}); 
    }
};
