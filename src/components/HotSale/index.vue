<template>
  <view class="hot-sale-comp">
    <view class="header">
      <view class="title">
        {{ props.title }}
      </view>
      <view class="more-nav" @click="handleClickNav">
        <view class="more-text">{{ props.moreNavigateText }}</view>
        <view class="more-icon at-icon at-icon-chevron-right"></view>
      </view>
    </view>
    <view class="card-list">
      <HotSaleCard
        v-for="card in cardList"
        @click="handleCardClick(card)"
        v-bind="cardProps?.(card)"
        :key="get(card, props.cardKey)"
      />
    </view>
  </view>
</template>

<script setup>
import get from "lodash/get";
import HotSaleCard from "./HotSaleCard.vue";
import "./index.scss";

const props = defineProps({
  title: String,
  moreNavigateText: String,
  cardList: Array,
  cardKey: {
    type: String,
    required: true,
  },
  cardProps: Function,
});

const emits = defineEmits(["clickCard", "clickNav"]);

const handleCardClick = (...arg) => emits("clickCard", ...arg);
const handleClickNav = (...arg) => emits("clickNav", ...arg);
</script>
