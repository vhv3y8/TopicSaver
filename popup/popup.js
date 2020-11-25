// let folderName = document.getElementById("folderName");

let iconBarButtons = document.querySelectorAll("#iconBar > a > button");

// add hover effect on iconBar Icons
for (let i = 0; i < iconBarButtons.length; i++) {
  let defaultColor;
  iconBarButtons[i].addEventListener("mouseover", function () {
    defaultColor = iconBarButtons[i].style.backgroundColor;
    iconBarButtons[i].style.backgroundColor = "lightgray";
    iconBarButtons[i].style.cursor = "pointer";
  });
  iconBarButtons[i].addEventListener("mouseout", function () {
    iconBarButtons[i].style.backgroundColor = defaultColor;
  });
}

let Items = document.querySelectorAll(".item");

for (let i = 0; i < Items.length; i++) {
  let defaultColor;
  Items[i].addEventListener("mouseover", function () {
    defaultColor = Items[i].style.backgroundColor;
    Items[i].style.backgroundColor = "#E6E6E6";
    Items[i].style.cursor = "pointer";
  });
  Items[i].addEventListener("mouseout", function () {
    Items[i].style.backgroundColor = defaultColor;
  });
}

let toHover = document.getElementsByClassName("hover");

for (let i = 0; i < toHover.length; i++) {
  toHover[i].addEventListener("mouseover", function () {
    defaultColor = toHover[i].style.backgroundColor;
    toHover[i].style.backgroundColor = "lightgray";
    toHover[i].style.cursor = "pointer";
  });
  toHover[i].addEventListener("mouseout", function () {
    toHover[i].style.backgroundColor = defaultColor;
  });
}
