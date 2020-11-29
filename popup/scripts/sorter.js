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

export { sorter };
