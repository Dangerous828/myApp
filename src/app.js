import { createApp } from "vue";
import { createUI } from "taro-ui-vue3";
import "./app.scss";

// 引用全部组件样式
import "taro-ui-vue3/dist/style/index.scss";

// 引入pinia
import { createPinia } from "pinia";

const App = createApp({
  // 可以使用所有的 Vue 生命周期方法
  mounted() {},

  // 对应 onLaunch
  onLaunch() {},

  // 对应 onShow
  onShow(options) {},

  // 对应 onHide
  onHide() {},

  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

// 引用全部组件
const tuv3 = createUI();
App.use(tuv3);
App.use(createPinia());

export default App;
