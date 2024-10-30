import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductstoStore } from "./src/view/store";
import './style.css'

//aplicacion


renderCategories();
handleGetProductstoStore();

/* product */
const buttonAdd= document.getElementById("buttonAddElement")
buttonAdd.addEventListener("click", ()=>{
    openModal();
});


/* popup */
const cancelButton=document.getElementById("cancelButton");
cancelButton.addEventListener("click", ()=>{
    handleCancelButton();

}); 

const handleCancelButton=()=>{
    closeModal();
};

//abir y cerrar modal
const openModal = ()=>{

    const modal= document.getElementById("modalPopUp");
    modal.style.display="flex";

};

const closeModal = ()=>{

    const modal= document.getElementById("modalPopUp");
    modal.style.display="none";

};

//guardar o modificar elementos 
const acceptButton=document.getElementById("aceptButton");
acceptButton.addEventListener("click",()=>{
    handleSaveOrModifyElements();

});

const handleSaveOrModifyElements=()=>{

    const nombre= document.getElementById("name").value ,
    imagen= document.getElementById("img").value ,
    precio= document.getElementById("precio").value ,
    categories= document.getElementById("categoria").value ;

    let object={
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio, 
        categories
    };

    setInLocalStorage(object);
    handleGetProductstoStore();
    closeModal();

};

