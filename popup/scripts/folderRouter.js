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

export { folderRouter };
