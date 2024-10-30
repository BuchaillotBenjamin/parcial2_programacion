import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductstoStore } from "./src/view/store";
import './style.css'

//aplicacion
export let categoriaActiva=null;

export const setCategoriaActiva= (categoriaIn)=>{
    categoriaActiva=categoriaIn;
}

export let productoActivo=null;

export const setProductoActivo= (procutoIn)=>{
    productoActivo=procutoIn;
}



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
export const openModal = ()=>{

    const modal= document.getElementById("modalPopUp");
    modal.style.display="flex";

    if(productoActivo){
        const nombre= document.getElementById("name"),
        imagen= document.getElementById("img") ,
        precio= document.getElementById("precio") ,
        categories= document.getElementById("categoria");
        nombre.value=productoActivo.nombre;
        imagen.value=productoActivo.imagen;
        precio.value=productoActivo.precio;
        categories.value=productoActivo.categories;
    }

};

export const closeModal = ()=>{

    const modal= document.getElementById("modalPopUp");
    modal.style.display="none";
    setProductoActivo(null);
    resetModal();
};

const resetModal=()=>{
    const nombre= document.getElementById("name"),
    imagen= document.getElementById("img") ,
    precio= document.getElementById("precio") ,
    categories= document.getElementById("categoria");
    nombre.value="";
    imagen.value="";
    precio.value=0;
    categories.value="";

}

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

