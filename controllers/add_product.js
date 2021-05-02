import {create_product} from '../models/create_product.js';
export const add_product = (req,res) => {    
    let {codigo,modelo,marca,color,precio,descripcion} = req;   
    try{
        if(codigo.length != 0 &&  modelo.length != 0 && marca.length != 0 && color.length != 0 && precio.length != 0 && descripcion.length != 0){
            let fecha = new Date().toDateString();
            let hora = new Date().getHours();
            let minutos = new Date().getMinutes();
            let horaCompleta;
            hora < 12 ? horaCompleta = `${hora}:${minutos} am` : horaCompleta = `${hora}:${minutos} pm`
            let prodInfo = {codigo:codigo,modelo:modelo,marca:marca,color:color,precio:precio,descripcion:descripcion,fecha:fecha,hora:horaCompleta};
            create_product(prodInfo,res);
        }else{
            console.log("asignación de valores incompleta");
        }
    }catch(error){
        return console.log("nombre de clave incorrecta"); 
    }
};