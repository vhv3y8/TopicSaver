import { sorter } from "./scripts/sorter.js";
import { folderRouter } from "./scripts/folderRouter.js";
import { DataController } from "./scripts/DataController.js";

var db;
var folderStack;

// runs when popup page is opened
window.onload = async (e) => {
  console.log(folderStack);
  console.log("Window Successfully loaded.");

  db = await DataController.getDataBase(); // database json
  console.log("before sorting - db.datas :");
  console.log(Object.assign({}, db.datas));
  folderStack = ["Mainnn"];
  // folderStack = await DataController.getFolderStack();
  console.log("folderStack is");
  console.log(folderStack);
  console.log();

  // sort folders and links
  db.datas.folders = sorter.qsortFolder(db.datas.folders);
  db.datas.links = sorter.qsortLink(db.datas.links);
  console.log("now db is:");
  console.log(db);
  // DataController.saveDataBase();

  folderRouter.openFolder(db, folderStack);

  // Add Folder name to bar
  // let folderBar = document.getElementById("folderBar");
  // folderBar.appendChild(createFolderBar(folderStack));

  // Add data element into list
  // let list = document.querySelector("article section");
  // for (let i = 0; i < db.folders.length; i++) {
  //   list.appendChild(folderRouter.createFolderItem(db.folders[i]));
  // }
  // for (let i = 0; i < db.links.length; i++) {
  //   list.appendChild(folderRouter.createURLItem(db.links[i]));
  // }

  // let colorChange = function (color) {
  //   document.body.style.backgroundColor = color;
  // };
  // var colorwas = document.body.style.backgroundColor;
  // document.body.style.backgroundColor = "green";
  // const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  // await delay(300);
  // colorChange(colorwas);
};

export { folderStack, db };
