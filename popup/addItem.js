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

let itemSubmit = document.getElementById("itemSubmit");
itemSubmit.addEventListener("submit", function () {
  // 메세지 패싱 하든지 해서 결론적으로 json에 추가되도록 하는 코드
  // document.open("popup.html");
  // itemSubmit.style.backgroundColor = "red";
  // document.getElementById("#cancel").click();
});
document.querySelector('[type="submit"').addEventListener("click", function () {
  // itemSubmit.style.backgroundColor = "green";
  // document.location.href = "popup.html";
});
