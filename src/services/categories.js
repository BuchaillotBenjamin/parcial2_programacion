//render de la vista categorias

export const renderCategories = () =>{
    
    const ulList = document.getElementById("listFilter")
    ulList.innerHTML=
    `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesa">Hamburguesa</li>
    <li id="Papas">Papas fritas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;

    const liElement=ulList.querySelectorAll("li")
    liElement.forEach((liElement)=>{
        liElement.addEventListener("click",() =>{
            handleClick(liElement)
        })

    })

    const handleClick = (elemento) =>{
        liElement.forEach((el)=>{
            if(el.classList.contains("liActive")){
                el.classList.remove("liActive")
            }else{
                if(elemento==el){
                    el.classList.add("liActive")
                }
            }

        })
    }
}






