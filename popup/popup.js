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

// object that contain functions about sorting list items.
let sorter = {
  // sort functions
  qsortFolder: (folders) => {
    let qsortName = function (arr) {
      if (arr.length <= 1) return arr;
      const [pivot, ...rest] = arr;
      const lesser = rest.filter(
        (x) => x.name.toLowerCase() <= pivot.name.toLowerCase()
      );
      const greater = rest.filter(
        (x) => x.name.toLowerCase() > pivot.name.toLowerCase()
      );
      return [...qsortName(lesser), pivot, ...qsortName(greater)];
    };

    return qsortName(folders);
  },
  qsortLink: (links) => {
    let qsortTitle = function (arr) {
      if (arr.length <= 1) return arr;
      const [pivot, ...rest] = arr;
      const lesser = rest.filter(
        (x) => x.title.toLowerCase() <= pivot.title.toLowerCase()
      );
      const greater = rest.filter(
        (x) => x.title.toLowerCase() > pivot.title.toLowerCase()
      );
      return [...qsortTitle(lesser), pivot, ...qsortTitle(greater)];
    };

    return qsortTitle(links);
  },
};

let folderRouter = {
  // functions mapping json data into html element
  createFolderItem: function (folderData) {
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
  },
  createURLItem: function (urlData) {
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
  },

  //  ????
  createAddSelectItem: function () {
    let element = document.createElement("div");
    element.setAttribute("class", "item");
    element.setAttribute("id", "addSelect"); // id="addSelect"

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

    let createSelection = function () {
      let element = document.createElement("div");
    };

    return element;
  },

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

    document.querySelector("article section").remove(); // remove remaining list
    let list = document.createElement("section");
    let folderBar = document.getElementById("folderBar");
  },
};

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
