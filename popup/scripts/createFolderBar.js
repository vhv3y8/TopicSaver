// function mapping folder stack into html element
let createFolderBar = function (folderStack) {
  // Data Format
  // var folderStack = ["Main", "JavaScript", "Chrome Extension"]
  let copyStack;
  for (let i = 0; i < folderStack.length; i++) {
    // folderStack
    // TOODO
  }
  console.log("copyStack is :");
  // console.log(copyStack);

  let addArrowIcon = function () {
    // <img src="../assets/icons/iconmonstr-arrow-25-12.png" alt=">" />
    let icon = document.createElement("img");
    icon.setAttribute("src", "../assets/icons/iconmonstr-arrow-25-12.png");
    icon.setAttribute("alt", ">");
    return icon;
  };
  let addFolderName = function (name) {
    let aTag = document.createElement("a");
    aTag.setAttribute("href", "#");
    // aTag.onmouseover.cursor = none;

    let folderName = document.createElement("p");
    folderName.innerHTML = name;
    folderName.style.display = "inline";
    folderName.style.padding = "3px";
    let defaultColor;
    folderName.addEventListener("mouseover", function () {
      defaultColor = folderName.style.backgroundColor;
      folderName.style.backgroundColor = "#cccccc";
      // folderName.style.cursor = "pointer";
    });
    folderName.addEventListener("mouseout", function () {
      folderName.style.backgroundColor = defaultColor;
    });

    aTag.appendChild(folderName);
    return aTag;
  };

  let bar = document.createElement("div");
  bar.setAttribute("class", "folderBar");
  let element = document.createElement("div");

  // make html element
  console.log(copyStack);
  element.appendChild(addFolderName(folderStack.shift()));
  while (folderStack.length) {
    element.appendChild(addArrowIcon());
    element.appendChild(addFolderName(folderStack.shift()));
  }

  // console.log(element);

  // #folderBar {
  //   /* position: relative;
  //   left: 0;
  //   top: 0;
  //   margin: 0; */
  //   width: 75%;
  //   padding: 5px;
  //   /* background-color: aqua; */
  // }
  // #folderBar div {
  //   font-family: "Ubuntu Bold", sans-serif;
  //   margin: 3px;
  //   padding: 2px;
  //   /* background-color: white; */
  // }
  // #folderBar a {
  //   text-decoration: none;
  //   color: currentColor;
  // }

  // style

  let styles = { width: "75%", padding: "5px" };

  bar.appendChild(element);
  return bar;
};

export { createFolderBar };
