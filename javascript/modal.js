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
    const lowerItems = document.querySelectorAll("#nav-right .nav-item");

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

      modalMenuUpper.append(menuItemDiv);
    });

    lowerItems.forEach(item => {
      const menuItemDiv = item.cloneNode(true);
      const menuAnchor = menuItemDiv.querySelector(".nav-link");

      menuItemDiv.classList.remove("nav-item");
      menuItemDiv.removeAttribute("id");
      menuAnchor.removeAttribute("class");
      menuAnchor.removeAttribute("id");

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