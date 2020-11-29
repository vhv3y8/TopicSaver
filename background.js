// 원래 백그라운드에서 다 한 다음에 팝업에서는 띄우는 정도의 스크립트만 짜는건가?
//  마치 backend와 frontend같이?

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    database: {
      folders: [
        {
          name: "JavaScript",
          datas: {
            folders: [
              {
                name: "nodeJS",
                datas: {
                  folders: [],
                  links: [],
                },
              },
            ],
            links: [],
          },
        },
        {
          name: "npm, 패키지, 모듈 등",
          datas: {
            folders: [],
            links: [
              {
                title: " ",
                url: "https://docs.npmjs.com/about-packages-and-modules",
              },
              {
                title: "React와 Node.js의 관계는 쫌 건너건너(?)에요",
                url:
                  "https://velog.io/@eungook/React와-Node.js의-관계는-쫌-건너건너에요",
              },
              {
                title: "Dependency Manager",
                url: "https://devopedia.org/dependency-manager",
              },
            ],
          },
        },
        {
          name: "git",
          datas: {
            folders: [
              {
                name: "git 이론",
                datas: {
                  folders: [],
                  links: [
                    {
                      title: "git book 한글",
                      url: "https://git-scm.com/book/ko/v2",
                    },
                  ],
                },
              },
              {
                name: "블로그포스트",
                datas: {
                  folders: [],
                  links: [
                    {
                      title: "nfarina 블로그 object 글",
                      url:
                        "https://nfarina.com/post/9868516270/git-is-simpler#objects",
                    },
                  ],
                },
              },
            ],
            links: [],
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
