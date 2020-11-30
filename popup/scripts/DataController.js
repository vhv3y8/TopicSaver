let DataController = {
  // fetch data, async function
  getDataBase: () => {
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
  },

  saveDataBase: () => {},

  getFolderStack: () => {
    // https://stackoverflow.com/a/57551361
    return new Promise((res, rej) => {
      try {
        chrome.storage.sync.get("folderStack", function (val) {
          // console.log(val);
          res(val);
        });
      } catch (e) {
        rej(e);
      }
    });
  },
};

export { DataController };
