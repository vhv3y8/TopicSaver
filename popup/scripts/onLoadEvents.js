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

export { getDataBase };
