// 원래 백그라운드에서 다 한 다음에 팝업에서는 띄우는 정도의 스크립트만 짜는건가?
//  마치 backend와 frontend같이?

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    database: {
      folders: [
        {
          name: "JavaScript",
          datas: {
            folder: [],
            link: [],
          },
        },
      ],
      links: [
        {
          title: "MDN reference",
          url: "https://www.google.com",
        },
        {
          title: "hihihi",
          url: "https://asfsadf.asdf",
        },
      ],
    },
  });
});
