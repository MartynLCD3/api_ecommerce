import {read_saved_products} from '../../models/savedProducts/read_saved_products.js';
import {create_product} from '../../models/create_product.js';
import {delete_saved_product} from '../../models/savedProducts/delete_saved_product.js';
export const control_saved_products = (() => {
   Promise.all([read_saved_products()]).then(objs => {
      let [products] = objs;
      let today = new Date().toISOString().substr(0, 10);
      let hour = new Date().getHours();
      let minutes = new Date().getMinutes();
      let fullHour;
      hour < 12 ? fullHour = `${hour}:${minutes} am` : fullHour = `${hour}:${minutes} pm`;
      Array.from(products, x => {
         let {idEvent,code,model,brand,color,price,description,stock,check,day} = x
	    if(check == "true" && day == today){
	       let info = {     
		  code:code,
		  model:model,
		  brand:brand,
		  color:color,
		  price:price,
		  description:description,
		  stock:stock,
		  date:today,
		  hour:fullHour
	       }
	       create_product(info);
	       delete_saved_product(idEvent);
	    }
      })	
   })
})();
