class MenuComponent extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: "open" });

        const menuContainer = document.createElement("nav");
        menuContainer.classList.add("menu");

        menuContainer.innerHTML = `
        <div class="menu-content">
            <ul>
                <li><a href="#">All categories</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">design</a></li>
                <li><a href="#">Engineering</a></li>
            </ul>
            <div class="actions">
                    <input type="text" class="search" placeholder="Search...">
                    <i class="fa-solid fa-wifi"></i>

            </div>
        </div>
        `;

        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("href", "src/components/nav/stylenav.css");


        shadow.appendChild(linkElement);
        shadow.appendChild(menuContainer);
    }
}

export default MenuComponent;

