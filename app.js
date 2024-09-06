let open_menu = document.querySelector(".open_menu");
let navbare = document.querySelector(".navbare");
let close_menu = document.querySelector(".close_menu");
let Features_img = document.querySelector(".Features_img");
let details_features = document.querySelector(".details_features");
let Company_img = document.querySelector(".Company_img");
let details_company = document.querySelector(".details_company");

// Open the navigation menu
open_menu.onclick = () => {
  navbare.classList.add("new_nav");
};

// Close the navigation menu
close_menu.onclick = () => {
  navbare.classList.remove("new_nav");
};

// Toggle features dropdown and switch the arrow image
Features_img.onclick = () => {
  details_features.classList.toggle("new_details_features");
  if (Features_img.src.includes("icon-arrow-down.svg")) {
    Features_img.src = "images/icon-arrow-up.svg";
  } else {
    Features_img.src = "images/icon-arrow-down.svg";
  }
};

// Toggle company dropdown and switch the arrow image
Company_img.onclick = () => {
  details_company.classList.toggle("new_details_company");
  if (Company_img.src.includes("icon-arrow-down.svg")) {
    Company_img.src = "images/icon-arrow-up.svg";
  } else {
    Company_img.src = "images/icon-arrow-down.svg";
  }
};
