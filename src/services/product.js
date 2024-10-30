/* product */

import { productoActivo } from "../../main";
import { handleGetProductsLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../view/MODAL.JS";
import { handleGetProductstoStore, handleRenderList } from "../view/store";



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


//eliminar elemento
export const handleDeleteProduct=()=>{

    console.log("eliminando")
    const products=handleGetProductsLocalStorage();
    const results=products.filter((el)=>el.id!=productoActivo.id);
     
    //set nuevo array
    localStorage.setItem("products",JSON.stringify(results));
    const newProducts= handleGetProductsLocalStorage();
    handleRenderList(newProducts);
    closeModal();
}
