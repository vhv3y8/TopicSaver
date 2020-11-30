import { folderRouter } from "./folderRouter.js";
import { folderStack, db } from "../popup.js";

// function mapping folder stack into html element
let createFolderBarDiv = function (folderStack) {
  // Data Format
  // var folderStack = ["Main", "JavaScript", "Chrome Extension"]
  let copyStack;
  for (let i = 0; i < folderStack.length; i++) {
    // folderStack
    // TOODO
  }
  // console.log("copyStack is :");
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

    // add Events
    let defaultColor;
    folderName.addEventListener("mouseover", function () {
      defaultColor = folderName.style.backgroundColor;
      folderName.style.backgroundColor = "#cccccc";
      // folderName.style.cursor = "pointer";
    });
    folderName.addEventListener("mouseout", function () {
      folderName.style.backgroundColor = defaultColor;
    });
    folderName.addEventListener("click", function () {
      // TODO : db가 아니라 클릭한쪽으로 가야됨
      folderStack = folderStack.slice(0, folderStack.indexOf(name) + 1);
      // let
      folderRouter.openFolder(db, folderStack);
    });

    aTag.appendChild(folderName);
    return aTag;
  };

  // Flow Start
  let element = document.createElement("div");

  // make html element
  element.appendChild(addFolderName(folderStack[0]));
  for (let i = 1; i < folderStack.length; i++) {
    element.appendChild(addArrowIcon());
    element.appendChild(addFolderName(folderStack[i]));
  }
  // element.appendChild(addFolderName(folderStack.shift()));
  // while (folderStack.length) {
  //   element.appendChild(addArrowIcon());
  //   element.appendChild(addFolderName(folderStack.shift()));
  // }

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

  return element;
};

export { createFolderBarDiv, folderStack, db };
