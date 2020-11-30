// let listCreater = {
//   // functions mapping json data into html element

import { folderRouter } from "./folderRouter.js";
import { folderStack } from "../popup.js";

//   //  ????
//   createAddSelectItem: function () {
//     let element = document.createElement("div");
//     element.setAttribute("class", "item");
//     element.setAttribute("id", "addSelect"); // id="addSelect"

//     // add Events
//     let defaultColor;
//     element.addEventListener("mouseover", function () {
//       defaultColor = element.style.backgroundColor;
//       element.style.backgroundColor = "#E6E6E6";
//       element.style.cursor = "pointer";
//     });
//     element.addEventListener("mouseout", function () {
//       element.style.backgroundColor = defaultColor;
//     });

//     let createSelection = function () {
//       let element = document.createElement("div");
//     };

//     return element;
//   },
// };

// integrated function.
// 역할 : folder라는 JSON 데이터를 주면, 해당하는 아이템들을 만들어서 section 태그를 리턴한다.
let createListSection = function (folderData) {
  //  Data Format
  //  let folderData = {
  //     name: "folderName",
  //     datas: {
  //       folders: [],
  //       links: [],
  //     },
  //   },

  let createFolderItem = function (folderData) {
    //  Data Format
    //  let folderData = {
    //     name: "folderName",
    //     datas: {
    //       folders: [],
    //       links: [],
    //     },
    //   },
    let element = document.createElement("div");
    element.setAttribute("class", "item");

    // add Events
    let defaultColor;
    element.addEventListener("mouseover", function () {
      defaultColor = element.style.backgroundColor;
      element.style.backgroundColor = "#E6E6E6";
      element.style.cursor = "pointer";
    });
    element.addEventListener("mouseout", function () {
      element.style.backgroundColor = defaultColor;
    });
    element.addEventListener("click", function () {
      console.log("in createListSection - folderStack is");
      console.log(folderStack);
      folderStack.push(folderData.name);
      console.log(folderStack);
      folderRouter.openFolder(folderData, folderStack);
    });

    // add img
    let icon = document.createElement("img");
    icon.setAttribute("alt", "Folder");
    icon.setAttribute("src", "../assets/icons/iconmonstr-folder-2-16.png");

    // add text
    let text = document.createElement("p");
    text.innerHTML = folderData.name;

    element.appendChild(icon);
    element.appendChild(text);

    // console.log(element);

    return element;
  };
  let createURLItem = function (urlData) {
    // Data Format
    // let urlData = {
    //   title: "MDN reference",
    //   url: "https://www.google.com",
    // }
    let element = document.createElement("div");
    element.setAttribute("class", "item");

    // add Events
    let defaultColor;
    element.addEventListener("mouseover", function () {
      defaultColor = element.style.backgroundColor;
      element.style.backgroundColor = "#E6E6E6";
      element.style.cursor = "pointer";
    });
    element.addEventListener("mouseout", function () {
      element.style.backgroundColor = defaultColor;
    });

    // add img
    let icon = document.createElement("img");
    icon.setAttribute("alt", "URL");
    icon.setAttribute("src", "../assets/icons/iconmonstr-link-7-12.png");
    icon.style.width = "12px";
    icon.style.height = "12px";

    let text = document.createElement("p");
    text.innerHTML = urlData.title;

    [icon, text].forEach((x) => element.appendChild(x));
    // element.appendChild(icon);
    // element.appendChild(text);

    // console.log(element);

    return element;
  };

  // Flow Start
  let listSection = document.createElement("section");
  listSection.setAttribute("id", "listSection");

  //  Data Format
  //  let folderData = {
  //     name: "folderName",
  //     datas: {
  //       folders: [],
  //       links: [],
  //     },
  //   },

  let folders = folderData.datas.folders;
  let links = folderData.datas.links;
  for (let i = 0; i < folders.length; i++) {
    listSection.appendChild(createFolderItem(folders[i]));
  }
  for (let i = 0; i < links.length; i++) {
    listSection.appendChild(createURLItem(links[i]));
  }

  return listSection;
};

export { createListSection };
