<template>
  <view class="hot-sale-card">
    <view class="card-image">
      <image :src="props.imgUrl" alt="" />
      <view class="image-tag" v-if="props.imgTagText">{{
        props.imgTagText
      }}</view>
    </view>
    <view class="content">
      <view class="title">
        {{ props.title }}
      </view>
      <view class="sub-title">
        {{ props.subTitle }}
      </view>
    </view>
  </view>
</template>

<script setup>
import "./HotSaleCard.scss";

const props = defineProps({
  imgTagText: String,
  imgUrl: String,
  title: String,
  subTitle: String,
});
</script>
