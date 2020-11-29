import { sorter } from "./scripts/sorter.js";
import { folderRouter } from "./scripts/folderRouter.js";
import { createFolderBar } from "./scripts/createFolderBar.js";
import { getDataBase } from "./scripts/onLoadEvents.js";

// runs when popup page is opened
window.onload = async (e) => {
  console.log("Window Successfully loaded.");

  var db = await getDataBase(); // database json
  console.log(Object.assign({}, db));
  var folderStack = ["Main"];

  // Add Folder name to bar
  let folderBar = document.getElementById("folderBar");
  folderBar.appendChild(createFolderBar(folderStack));

  // sort folders and links
  db.folders = sorter.qsortFolder(db.folders);
  db.links = sorter.qsortLink(db.links);
  console.log("now db is:");
  console.log(db);

  // Add data element into list
  let list = document.querySelector("article section");
  for (let i = 0; i < db.folders.length; i++) {
    list.appendChild(folderRouter.createFolderItem(db.folders[i]));
  }
  for (let i = 0; i < db.links.length; i++) {
    list.appendChild(folderRouter.createURLItem(db.links[i]));
  }

  // let colorChange = function (color) {
  //   document.body.style.backgroundColor = color;
  // };
  // var colorwas = document.body.style.backgroundColor;
  // document.body.style.backgroundColor = "green";
  // const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  // await delay(300);
  // colorChange(colorwas);

  console.log(document.body.style.backgroundColor);
};
