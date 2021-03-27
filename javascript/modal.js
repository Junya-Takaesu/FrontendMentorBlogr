export default class Modal {

  constructor() {
    this.create();
  }

  create() {
    const modalAside = document.createElement("aside");
    const modalMenuList = document.createElement("ul");
    const modalMenuUpper = document.createElement("li");
    const modalMenuLower = document.createElement("li");
    const upperItems = document.querySelectorAll("#nav-left .nav-item");
    const lowerItems = document.querySelectorAll("#nav-right .nav-link");

    modalAside.id = "modal";
    modalAside.classList.add("hide");
    modalMenuList.classList.add("modal-menu");
    modalMenuUpper.classList.add("menu-upper");
    modalMenuLower.classList.add("menu-lower");

    upperItems.forEach(item => {
      const menuItemDiv = item.cloneNode(true);
      const menuAnchor = menuItemDiv.querySelector(".nav-link");
      const arrowIconImg = menuAnchor.querySelector(".arrow-icon-default");

      menuItemDiv.removeAttribute("class");
      menuItemDiv.removeAttribute("id");
      menuAnchor.removeAttribute("class");

      arrowIconImg.src = "./images/icon-arrow-dark.svg";
      menuItemDiv.classList.add("menu-item");

      menuItemDiv.addEventListener("click", event => {
        event.stopPropagation();
        const dropDownContent = menuItemDiv.querySelector(".dropdown-content");
        dropDownContent.classList.toggle("show");
        arrowIconImg.classList.toggle("arrow-icon-expand");
        menuItemDiv.classList.toggle("active");
      });

      modalMenuUpper.append(menuItemDiv);
    });

    console.log(lowerItems);
    lowerItems.forEach(item => {
      const menuItemDiv = item.cloneNode(true);

      menuItemDiv.classList.remove("nav-item", "nav-link", "nav-button", "me-2", "px-4", "py-3", "signup");
      menuItemDiv.removeAttribute("id");

      menuItemDiv.classList.add("menu-item");
      modalMenuLower.append(menuItemDiv);
    });

    modalMenuList.append(modalMenuUpper);
    modalMenuList.append(modalMenuLower);
    modalAside.append(modalMenuList);

    document.querySelector("body").append(modalAside);
  }

  toggle() {
    const modal = document.querySelector("#modal");
    modal.classList.toggle("hide");
  }
}