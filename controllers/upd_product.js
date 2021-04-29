import {update_product} from '../models/update_product.js';
export const upd_product = (req,res) => {
    let {id} = req.params;
    let {codigo,modelo,marca,color,precio,descripcion,adicional} = req.body;
    try{
        if(codigo.length != 0 &&  modelo.length != 0 && marca.length != 0 && color.length != 0 && precio.length != 0 && descripcion.length != 0 && adicional.length != 0){
            let prod_updated = {codigo:codigo,modelo:modelo,marca:marca,color:color,precio:precio,descripcion:descripcion,adicional:adicional};
            update_product(id,prod_updated,res);
        }else{
            console.log("asignación de valores incompleta");
        }
    }catch(error){
        return console.log("nombre de clave incorrecta"); 
    }
};