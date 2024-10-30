/* product */

import { closeModal } from "../../main";
import { setInLocalStorage } from "../persistence/localstorage";
import { handleGetProductstoStore } from "../view/store";



//guardar o modificar elementos 
const acceptButton=document.getElementById("aceptButton");
acceptButton.addEventListener("click",()=>{
    handleSaveOrModifyElements();

});
//funcuin de guardar
const handleSaveOrModifyElements=()=>{

    const nombre= document.getElementById("name").value ,
    imagen= document.getElementById("img").value ,
    precio= document.getElementById("precio").value ,
    categories= document.getElementById("categoria").value ;
    let object=null;

    if(productoActivo){
        object={
            ...productoActivo,
            nombre,
            imagen,
            precio, 
            categories
        }

    }else{

        object={
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio, 
            categories
        };
    }

    

    setInLocalStorage(object);
    handleGetProductstoStore();
    closeModal();

};

