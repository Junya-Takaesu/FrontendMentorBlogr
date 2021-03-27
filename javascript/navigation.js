import Modal from "./modal.js";
const modal = new Modal();

export default class Navigation {

  initialize() {
    const navItems = document.querySelectorAll("#nav-left .nav-item");
    const hamburgerIcon = document.querySelector("#hamburger");
    const navigationRow = document.querySelector("#navigation .row");
    console.log(navigationRow);

    navItems.forEach(navItem => {
      navItem.addEventListener("click", () => {
        this.toggleDropDownContent(navItem);
      });
    });

    window.addEventListener("click", (event) => {
      if (!event.target.matches(".nav-link")) {
        this.toggleDropDownContent();
      }
    });

    hamburgerIcon.addEventListener("click", () => {
      const url = new URL(hamburgerIcon.src);
      if (url.pathname == "/images/icon-hamburger.svg") {
        hamburgerIcon.src = "images/icon-close.svg";
        modal.toggle();
      } else {
        hamburgerIcon.src = "images/icon-hamburger.svg";
        modal.toggle();
      }
    });

    window.addEventListener("scroll", () =>{
      if (400 < window.scrollY) {
        if (!navigationRow.classList.contains("background-filled")) {
          navigationRow.classList.add("background-filled");
        }
      } else {
        if (navigationRow.classList.contains("background-filled")) {
          navigationRow.classList.remove("background-filled");
        }
      }
    });
  }

  toggleDropDownContent(navItem) {
    let dropDownContent;
    let arrowIcon;
    if (navItem) {
      let currentActiveDropdownList;
      let currentActiveArrowIcon;

      currentActiveDropdownList = document.querySelector(".show");
      currentActiveArrowIcon = document.querySelector(".arrow-icon-expand");

      if (currentActiveDropdownList) {
        currentActiveDropdownList.classList.toggle("show");
        currentActiveArrowIcon.classList.toggle("arrow-icon-expand");
      } else {
        arrowIcon = navItem.querySelector(".arrow-icon-default");
        dropDownContent = navItem.querySelector(".dropdown-content");
        dropDownContent.classList.toggle("show");
      }
    } else {
      dropDownContent = document.querySelector(".show");
      if (dropDownContent) {
        arrowIcon = dropDownContent.previousElementSibling.querySelector(".arrow-icon-expand");
        dropDownContent.classList.toggle("show");
      }
    }
    if (arrowIcon) {
      this.toggleArrowIcon(arrowIcon);
    }
  }

  toggleArrowIcon(arrowIcon) {
    arrowIcon.classList.toggle("arrow-icon-expand");
  }
}