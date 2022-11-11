<template>
  <div class="my-page">
    <div class="header">
      <div class="left"></div>
      <div class="right">
        <text>{{ phone }}</text>
      </div>
    </div>
    <div class="nav-btn">
      <div class="left">收藏列表</div>
      <div class="right">看房历史</div>
    </div>
    <div class="action-list">
      <div class="list-item">联系客服</div>
      <div class="list-item">隐私政策</div>
      <div class="list-item">关于我们</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import "./my.scss";
let phone = ref("159xxxxxx10");
</script>
