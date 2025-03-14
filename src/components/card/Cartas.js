class Cartas extends HTMLElement{
    constructor(){
        super();

        let shadow = this.attachShadow({mode: 'open'});

        this.divHeader = document.createElement("div")
        this.divContent = document.createElement("div") 
        this.divContent.classList.add("container");
        
    
    
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("href", "src/components/card/StyleCartas.css");
        
        shadow.appendChild(linkElement);
        shadow.appendChild(this.divHeader)
        shadow.appendChild(this.divContent)
    }


    connectedCallback(){

        let url = this.getAttribute("data-json");
        
        this.divContent.innerHTML = "";
        

        fetch(url)
        .then(response=>response.json())
        .then(json=>json.forEach((Element, index) =>{
            let card = document.createElement("div");
                card.classList.add("card");

                card.classList.add("card", "card" + index)
                
                let imageTag = Element.image1 && Element.image1.trim() !== "" ? 
                    `<img src="${Element.image1}" alt="${Element.title}">` : "";

                

                card.innerHTML = `
                    ${imageTag}
                    <div class="category">${Element.category}</div>
                    <div class="title">${Element.title}</div>
                    <div class="description">${Element.description}</div>
                    
                    <div class="card-header">
                    <img class="profile-pic" src="${Element.image2}" >
                    <span class="author-name">${Element.name}</span>
                    <div class="date">${Element.date}</div>
                    </div>
                `;
    
        this.divContent.appendChild(card);
        }));
    }

}

export default Cartas;

