<script setup>

import img1 from '../assets/11.jpg';
import img2 from '../assets/12.jpg';
import img3 from '../assets/13.jpg';
import img4 from '../assets/14.jpg';

const imglist = {img1,img2,img3,img4};

const loremIpsum = "Occaecat ex nulla excepteur sit elit dolor excepteur consectetur.Non fugiat tempor incididunt proident";

</script>

<template>
  <div class="flex ">
  <div class="w-2/3 p-1">
    <Swiper
      class="container p-4 flex justify-between"
      :modules="[SwiperAutoplay,SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
    clickable: true
    :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
    <SwiperSlide v-for="n in 10" :key="n">
      <img :src="'https://picsum.photos/1024/800?random='+n">
      <p class="p1 pl-3">{{loremIpsum}}</p>
    </SwiperSlide>
    </Swiper>
    </div>
<div class="w-1/3 p-1">
    <Swiper
      class="container p-4 flex justify-between"
      :modules="[SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
    :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
    <SwiperSlide v-for="img in imglist" :key="img">
      <img :src=img>
      <p class="p1 pl-3 whitespace-pre-line">{{loremIpsum}}</p>
    </SwiperSlide>
    </Swiper>
  </div>
  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  height: 40vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
 
}
img{
    width: 100%;
    height: 100%;
}
.swiper-cards {
  width: 100%;
  height: 240px;
}
.swiper-cards .swiper-slide {
  width: 100%;
  border-radius: 6px;
  border: 1px solid black;
}

.p1{
  position: absolute;
  font-weight: 400;
  font-size:23px;
  left:0%;
  color: whitesmoke;
  margin-top: 10%;
  width: 50%;
  
}

.container {
  justify-content: space-evenly ;
}
</style>

