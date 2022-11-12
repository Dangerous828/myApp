<template>
  <view class="my-page">
    <view class="header">
      <view class="left"></view>
      <view class="right">
        <text>{{ phone }}</text>
      </view>
    </view>
    <view class="nav-btn">
      <view class="left">收藏列表</view>
      <view class="right">看房历史</view>
    </view>
    <view class="action-list">
      <view class="list-item"
        ><text>联系客服</text
        ><AtIcon value="chevron-right" size="30" color="#F00"></AtIcon
      ></view>
      <view class="list-item"
        ><text>隐私政策</text
        ><AtIcon value="chevron-right" size="30" color="#F00"></AtIcon
      ></view>
      <view class="list-item"
        ><text>关于我们</text
        ><AtIcon value="chevron-right" size="30" color="#F00"></AtIcon
      ></view>
    </view>
  </view>
</template>

<script>
import { ref } from "vue";
import "./my.scss";
export default {
  // 可以使用所有的 Vue 生命周期方法
  mounted() {},

  // onLoad
  onLoad() {},

  // onReady
  onReady() {},

  // 对应 onShow
  onShow() {},
  methods: {},

  // 对应 onHide
  onHide() {},

  setup() {
    const msg = ref("Hello world");
    return {
      msg,
    };
  },
};
</script>
