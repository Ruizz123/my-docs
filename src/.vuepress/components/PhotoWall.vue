<template>
  <div class="imgDiv">
    <!-- <span>{{ item.id }}</span> -->
    <img
      v-for="item in photowall"
      :key="item.id"
      class="img"
      :src="item.img"
      alt="宝宝"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const photowall = ref([
  {
    id: 1,
    img: "../assets/images/baobao/7.31_1.jpg",
  },
  {
    id: 2,
    img: "../assets/images/baobao/7.31_2.jpg",
  },
  {
    id: 3,
    img: "../assets/images/baobao/7.31_3.jpg",
  },
  {
    id: 4,
    img: "../assets/images/baobao/7.31_4.jpg",
  },
  {
    id: 5,
    img: "../assets/images/baobao/7.31_5.jpg",
  },
  {
    id: 6,
    img: "../assets/images/baobao/7.31_6.jpg",
  },
  {
    id: 7,
    img: "../assets/images/baobao/7.31_7.jpg",
  },
  {
    id: 8,
    img: "../assets/images/baobao/7.31_8.jpg",
  },
  {
    id: 9,
    img: "../assets/images/baobao/7.31_9.jpg",
  },
]);
</script>

<style lang="scss" scoped>
.imgDiv {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.img {
  width: 33%;
}
</style>
