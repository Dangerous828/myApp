<template>
  <view class="landing-page">
    <view class="search-bar">
      <view class="search-icon">
        <view class="at-icon at-icon-search"></view>
      </view>
      <view class="search-input">
        <AtInput :placeholder="searchBar.searchPlaceHolder" :border="false" />
      </view>
      <picker
        mode="selector"
        :range="community.data"
        :value="community.selectedValue"
        rangeKey="label"
        @change="community.handleChange"
      >
        <view class="search-address-wrap">
          <view class="address-icon at-icon at-icon-map-pin"></view>
          <view class="address-text">{{ searchBar.searchAddress }}</view>
        </view>
      </picker>
    </view>
    <view class="grid-list">
      <view class="grid-wrap" v-for="grid in gridBar.data" :key="grid.label">
        <view class="grid-icon"> </view>
        <view class="grid-label">
          {{ grid.label }}
        </view>
      </view>
    </view>
    <view class="hot-sale">
      <HotSale
        moreNavigateText="更多在售楼盘"
        :cardList="hotSaleBar.data"
        title="新房 · 本周热门好盘"
        :cardProps="hotSaleBar.handleCardProps"
        cardKey="label"
      />
    </view>

    <!-- <button @tap="jumpMy()">my</button> -->
  </view>
</template>

<script setup>
import Taro, { usePageScroll, useReady } from "@tarojs/taro";
import { AtInput } from "taro-ui-vue3";
import HotSale from "@/components/HotSale/index.vue";
import { ref, reactive, toRaw } from "vue";
import { LIST_PATH } from "@/routes/path";

import "./index.scss";

const searchBar = reactive({
  searchText: "",
  searchAddress: "珠海",
  searchPlaceHolder: "你想住在哪?",
});

const gridBar = reactive({
  data: [
    {
      label: "二手房",
    },
    {
      label: "新房",
    },
    {
      label: "租房",
    },
    {
      label: "卖房",
    },
    {
      label: "查成交",
    },
    {
      label: "买卖流程",
    },
    {
      label: "去估价",
    },
    {
      label: "房贷计算",
    },
    {
      label: "商铺办公",
    },
  ],
});

const hotSaleBar = reactive({
  data: [
    {
      title: "海淀幸福里",
      subTitle: "98-195m²",
      imgTagText: "海淀",
    },
    {
      title: "海淀幸福里",
      subTitle: "98-195m²",
      imgTagText: "海淀",
    },
    {
      title: "海淀幸福里",
      subTitle: "98-195m²",
      imgTagText: "海淀",
    },
  ],
  handleCardProps: (data) => data,
});

const community = reactive({
  data: [
    {
      label: "xx小区",
    },
    {
      label: "xxx小区",
    },
    {
      label: "xxxx小区",
    },
    {
      label: "xxxxx小区",
    },
  ],
  selectedValue: undefined,
  handleChange() {
    Taro.switchTab({
      url: `/${LIST_PATH}`,
    });
  },
});

const jumpMy = () => {
  Taro.switchTab({
    url: "/pages/my/my",
  });
};
</script>
