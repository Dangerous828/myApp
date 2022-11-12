<template>
  <view class="landing-page">
    <view class="search-bar">
      <view class="search-icon">
        <view class="at-icon at-icon-search"></view>
      </view>
      <view class="search-input">
        <AtInput :placeholder="searchBar.searchPlaceHolder" :border="false" />
      </view>
      <view class="search-address-wrap">
        <view class="address-icon at-icon at-icon-map-pin"></view>
        <view class="address-text">{{ searchBar.searchAddress }}</view>
      </view>
    </view>
    <!-- <button @tap="jumpMy()">my</button> -->
  </view>
</template>

<script setup>
import Taro from "@tarojs/taro";
import { AtInput } from "taro-ui-vue3";
import { ref, reactive } from "vue";
import "./index.scss";

const searchBar = reactive({
  searchText: "",
  searchAddress: "珠海",
  searchPlaceHolder: "你想住在哪?",
});

const jumpMy = () => {
  Taro.switchTab({
    url: "/pages/my/my",
  });
};
</script>
