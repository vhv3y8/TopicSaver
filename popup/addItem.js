let backButton = document.querySelector("header > a > button");
let defaultColor;

backButton.addEventListener("mouseover", function () {
  defaultColor = backButton.style.backgroundColor;
  backButton.style.backgroundColor = "lightgray";
  backButton.style.cursor = "pointer";
});

backButton.addEventListener("mouseout", function () {
  backButton.style.backgroundColor = defaultColor;
});
