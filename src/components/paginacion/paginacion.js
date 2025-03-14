document.addEventListener("DOMContentLoaded", async () => {
    
    
    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("href", "src/components/paginacion/PagS.css");
    document.head.appendChild(linkElement);

    const container = document.getElementById("pagContainer");
    if(!container) return;

    const pagDiv = document.createElement("div");
    pagDiv.classList.add("pagination");

    const totalPag = 10;

    for(let i =1; i <= totalPag; i++){
        const PagItem = document.createElement("span");
        PagItem.classList.add("PagItem");
        PagItem.textContent = i;

    if (i === 1) {
        PagItem.classList.add("active");
    }

    PagItem.addEventListener("click", () => {
        const AllItems = pagDiv.querySelectorAll(".PagItem");
        AllItems.forEach(item => item.classList.remove("active"));

        PagItem.classList.add("active");

        console.log("Pagina ${i} seleccionada");
    });

    pagDiv.appendChild(PagItem);
    }

    
    container.appendChild(pagDiv);
});