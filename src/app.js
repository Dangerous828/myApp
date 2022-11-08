import { createApp } from 'vue'
import './app.scss'

const App = createApp({
  // 可以使用所有的 Vue 生命周期方法
  mounted() { },

  // 对应 onLaunch
  onLaunch() { },

  // 对应 onShow
  onShow(options) { },

  // 对应 onHide
  onHide() { },

  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
