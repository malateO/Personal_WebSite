function closeMenu() {
  const menuItems = document.querySelectorAll(".menu li a");
  const checkBox = document.getElementById("check");

  menuItems.forEach((items) => {
    items.addEventListener("click", () => {
      checkBox.checked = false;
    });
  });
}

closeMenu();

const iconHoverColor = () => {
  const faBrands = document.querySelectorAll(".fa-brands");
  faBrands.forEach((element) => {
    element.addEventListener("mouseover", () => {
      switch (true) {
        case element.classList.contains("fa-html5"):
          element.style.color = "#E34C26";
          break;
        case element.classList.contains("fa-css3-alt"):
          element.style.color = "#264de4";
          break;
        case element.classList.contains("fa-js"):
          element.style.color = "#F0DB4F";
          break;
        case element.classList.contains("fa-git-alt"):
          element.style.color = "#F1502F";
          break;
        case element.classList.contains("fa-github"):
          element.style.color = "#000000";
          break;
        case element.classList.contains("fa-react"):
          element.style.color = "#61DBFB";
          break;
      }
    });
  });
  faBrands.forEach((element) => {
    element.addEventListener("mouseout", () => {
      switch (true) {
        case element.classList.contains("fa-html5"):
          element.style.color = "";
          break;
        case element.classList.contains("fa-css3-alt"):
          element.style.color = "";
          break;
        case element.classList.contains("fa-js"):
          element.style.color = "";
          break;
        case element.classList.contains("fa-git-alt"):
          element.style.color = "";
          break;
        case element.classList.contains("fa-github"):
          element.style.color = "";
          break;
        case element.classList.contains("fa-react"):
          element.style.color = "";
          break;
      }
    });
  });
};

iconHoverColor();
