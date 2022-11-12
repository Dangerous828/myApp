/* eslint-disable no-undef */
export default defineAppConfig({
  pages: ["pages/index/index", "pages/list/list", "pages/my/my"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#8DABC4",
    backgroundColor: "#ffffff",
    selectedColor: "#222222",
    borderStyle: "black",
    list: [
      { pagePath: "pages/index/index", text: "首页" },
      { pagePath: "pages/list/list", text: "列表" },
      { pagePath: "pages/my/my", text: "我的" },
    ],
  },
});
