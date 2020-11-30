import { createFolderBarDiv } from "./createFolderBar.js";
import { createListSection } from "./createListSection.js";

let folderRouter = {
  // open selected folder
  // 역할 : popup.html의 folderBar랑 listSection을 클릭한 폴더에 맞게 변환해준다.
  openFolder: function (folderObj, folderStack) {
    // Data Format
    // let folderObj = {
    //   name: "folderName",
    //   datas: {
    //     folders: [],
    //     links: [],
    //   },
    // };
    // let folderStack = ["Main", "JavaScript", "Chrome Extension"];
    // folderObj is db.folders.~~~~

    console.log("in openFolder - folderStack:");
    console.log(folderStack);
    // create folderBar and add it
    document.querySelector("#folderBar div").remove(); // remove remaining bar
    let bar = createFolderBarDiv(folderStack);
    document.getElementById("folderBar").appendChild(bar);

    // create listSection and add it
    document.getElementById("listSection").remove(); // remove remaining list
    let list = createListSection(folderObj);
    document.querySelector("article").appendChild(list);
  },
};

// class folderRouter2 {
//   static createFolderItem = (folderData) => {
//     //  Data Format
//     //  let folderData = {
//     //     name: "folderName",
//     //     datas: {
//     //       folders: [],
//     //       links: [],
//     //     },
//     //   },
//     let element = document.createElement("div");
//     element.setAttribute("class", "item");

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

//     // add img
//     let icon = document.createElement("img");
//     icon.setAttribute("alt", "Folder");
//     icon.setAttribute("src", "../assets/icons/iconmonstr-folder-2-16.png");

//     // add text
//     let text = document.createElement("p");
//     text.innerHTML = folderData.name;

//     element.appendChild(icon);
//     element.appendChild(text);

//     // console.log(element);

//     return element;
//   };

//   createURLItem = (urlData) => {
//     // Data Format
//     // let urlData = {
//     //   title: "MDN reference",
//     //   url: "https://www.google.com",
//     // }
//     let element = document.createElement("div");
//     element.setAttribute("class", "item");

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

//     // add img
//     let icon = document.createElement("img");
//     icon.setAttribute("alt", "URL");
//     icon.setAttribute("src", "../assets/icons/iconmonstr-link-7-12.png");
//     icon.style.width = "12px";
//     icon.style.height = "12px";

//     let text = document.createElement("p");
//     text.innerHTML = urlData.title;

//     [icon, text].forEach((x) => element.appendChild(x));
//     // element.appendChild(icon);
//     // element.appendChild(text);

//     // console.log(element);

//     return element;
//   };

//   openFolder = (folderObj, folderStack) => {
//     // Data Format
//     // let folderObj = {
//     //   name: "folderName",
//     //   datas: {
//     //     folders: [],
//     //     links: [],
//     //   },
//     // };
//     // let folderStack = ["Main", "JavaScript", "Chrome Extension"];
//     // folderObj is db.folders.~~~~

//     document.querySelector("article section").remove(); // remove remaining list
//     let list = document.createElement("section");
//     let folderBar = document.getElementById("folderBar");
//   };
// }

export { folderRouter };
