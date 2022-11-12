<template>
  <view class="landing-title">隐蛇找房</view>
  <view class="search-bar"> </view>
  <button @tap="jumpMy()">my</button>
</template>

<script setup>
import Taro from "@tarojs/taro";
import { ref, reactive } from "vue";
import "./index.scss";
const jumpMy = () => {
  Taro.switchTab({
    url: "/pages/my/my",
  });
};
</script>
