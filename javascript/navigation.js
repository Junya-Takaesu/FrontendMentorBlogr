export default class Navigation {

  initialize() {
    const navItems = document.querySelectorAll("#nav-left .nav-item");

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