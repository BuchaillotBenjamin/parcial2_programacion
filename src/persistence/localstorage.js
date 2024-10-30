//local storage

export const handleGetProductsLocalStorage = ()=>{

    const products= JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    } else{
        return [];
    }

};

//guardar en local storage

//recibe un producto
export const setInLocalStorage= (productIn)=>{
    //trae los elementos
    let producsInLocal=handleGetProductsLocalStorage();
    
    const existingIndex= producsInLocal.findIndex((productsLocal) =>
        productsLocal.id==productIn.id
    )

    //verifica si el elemento existe
    if(existingIndex!==-1){
        //si existe debe reemplazarse
        producsInLocal[existingIndex]=productIn;
    } else {
        //si no agregarse
        producsInLocal.push(productIn);
    }
    //set nuevo array
    localStorage.setItem("products",JSON.stringify(producsInLocal));
};











