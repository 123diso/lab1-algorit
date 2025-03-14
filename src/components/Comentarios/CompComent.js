const plantilla = document.createElement("template"); 
plantilla.innerHTML = `
 <style>
      :host {
      display: block;
      width: 100%;
      height: 100%
      box-sizing: border-box;
      }

      .card {
        background-color: trasnparent;
        border-radius: 8px;
        color: #ddd;
        font-family: sans-serif;
        font-size: 0.70rem;
        display: flex;
        flex-direction: column;
        row-gap: 0.80rem;
       
      }

      .categoria {
        color: #aaa;
        font-size: 0.75rem;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        letter-spacing: 0.5px;
      }
      .titulo {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      .descripcion {
        font-size: 0.95rem;
        color: #ccc;
        line-height: 1.3rem;
        flex: 1;
        margin-bottom: 0.5 rem;
         
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
      }
      .autor {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
      }
      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }
      .fecha {
        font-size: 0.8rem;
        color: #999;
      }
    </style>
    
    <div class = "card">
     <div class = "categoria" id = "categoria"></div>
     <div class = "titulo" id= "titulo"></div>
     <div class = "descripcion">
      <slot name= "descripcion">texto texto texto texto</slot></div>
    <div class ="info">
     <div class ="autor" id = "autorCont"></div>
    <div class = "fecha" id = "fecha"></div>
    </div>
    </div>
`;

class ComenTCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(plantilla.content.cloneNode(true));
    }
  
    static get observedAttributes() {
      return ["categoria", "titulo", "autor", "fecha", "avatar"];
    }
  
    connectedCallback() {
      this._render();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) this._render();
    }



    _render() {
        const ElemCategoria= this.shadowRoot.querySelector('#categoria');
        const ElemtTitulo = this.shadowRoot.querySelector('#titulo');
        const autorCont= this.shadowRoot.querySelector('#autorCont');
        const ElemFecha = this.shadowRoot.querySelector('#fecha');

        const AttrCateg = this.getAttribute("categoria");
        const AttrTitulo = this.getAttribute("titulo");
        const AttrAutor = this.getAttribute("autor");
        const AttrFecha = this.getAttribute("fecha");
        const AttrAvatar = this.getAttribute("avatar");

        ElemCategoria.textContent = AttrCateg;
        ElemtTitulo.textContent = AttrTitulo;
        ElemFecha.textContent = AttrFecha;

        autorCont.innerHTML ="";

        if (AttrAvatar){
          const img = document.createElement("img");
          img.src = AttrAvatar;
          img.alt = "avatar";
          img.classList.add("avatar");
          autorCont.appendChild(img);
        }
        
        const autorspan = document.createElement("span");
        autorspan.textContent = AttrAutor || "";
        autorCont.appendChild(autorspan);
    }
    
  } 
  customElements.define("coment-tcard", ComenTCard);
  