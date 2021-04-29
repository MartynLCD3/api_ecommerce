import {create_product} from '../models/create_product.js';
export const add_product = (req,res) => {
    let {codigo,modelo,marca,color,precio,descripcion,adicional} = req;
    try{
        if(codigo.length != 0 &&  modelo.length != 0 && marca.length != 0 && color.length != 0 && precio.length != 0 && descripcion.length != 0 && adicional.length != 0){
            let prodInfo = {codigo:codigo,modelo:modelo,marca:marca,color:color,precio:precio,descripcion:descripcion,adicional:adicional};
            create_product(prodInfo,res);
        }else{
            console.log("asignación de valores incompleta");
        }
    }catch(error){
        return console.log("nombre de clave incorrecta"); 
    }
};