// fetch data, async function
let getDataBase = () => {
  // https://stackoverflow.com/a/57551361
  return new Promise((res, rej) => {
    try {
      chrome.storage.sync.get("database", function (val) {
        // console.log(val);
        res(val.database);
      });
    } catch (e) {
      rej(e);
    }
  });
};

// function mapping folder stack into html element
let createFolderBar = function (folderStack) {
  // Data Format
  // var folderStack = ["Main", "JavaScript", "Chrome Extension"]

  let addArrowIcon = function () {
    // <img src="../assets/icons/iconmonstr-arrow-25-12.png" alt=">" />
    let icon = document.createElement("img");
    icon.setAttribute("src", "../assets/icons/iconmonstr-arrow-25-12.png");
    icon.setAttribute("alt", ">");
    return icon;
  };
  let addFolderName = function (name) {
    let folderName = document.createElement("p");
    folderName.innerHTML = name;
    return folderName;
  };

  let element = document.createElement("div");

  // make html element
  element.appendChild(addFolderName(folderStack.pop(0)));
  while (folderStack.length) {
    element.appendChild(addArrowIcon());
    element.appendChild(addFolderName(folderStack.pop(0)));
  }

  // console.log(element);

  return element;
};

// functions mapping json data into html element
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

  // [icon, text].forEach((x) => element.appendChild(x));
  element.appendChild(icon);
  element.appendChild(text);

  // console.log(element);

  return element;
};

// runs when popup page is opened
window.onload = async (e) => {
  console.log("Window Successfully loaded.");

  var db = await getDataBase(); // database json
  console.log(db);
  var folderStack = ["Main", "JavaScript"];

  // Add Folder name to bar
  let folderBar = document.getElementById("folderBar");
  folderBar.appendChild(createFolderBar(folderStack));

  // Add data element into list
  let list = document.querySelector("article section");
  for (let i = 0; i < db.folders.length; i++) {
    list.appendChild(createFolderItem(db.folders[i]));
  }
  for (let i = 0; i < db.links.length; i++) {
    list.appendChild(createURLItem(db.links[i]));
  }
};

// Adding events
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

// let Items = document.querySelectorAll(".item");

// for (let i = 0; i < Items.length; i++) {
//   let defaultColor;
//   Items[i].addEventListener("mouseover", function () {
//     defaultColor = Items[i].style.backgroundColor;
//     Items[i].style.backgroundColor = "#E6E6E6";
//     Items[i].style.cursor = "pointer";
//   });
//   Items[i].addEventListener("mouseout", function () {
//     Items[i].style.backgroundColor = defaultColor;
//   });
// }

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
