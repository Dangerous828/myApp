<template>
  <view class="landing-title">隐蛇找房</view>
  <view class="search-bar"> </view>
  <button @click="jumpMy()">my</button>
</template>

<script setup>
import Taro from "@tarojs/taro";
import { ref, reactive } from "vue";
import "./index.scss";
const jumpMy = () => {
  console.log(123);
  Taro.redirectTo({
    url: "/my",
  });
};
</script>
