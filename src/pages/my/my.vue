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
      <view class="list-item">联系客服</view>
      <view class="list-item">隐私政策</view>
      <view class="list-item">关于我们</view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from "vue";
import "./my.scss";
// let phone = ref("159xxxxxx10");
</script>
