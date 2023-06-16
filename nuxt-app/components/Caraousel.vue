<script setup>

import img5 from '../assets/11.jpg';
import img2 from '../assets/12.jpg';
import img3 from '../assets/13.jpg';
import img4 from '../assets/14.jpg';
import img1 from '../assets/football_image.jpg';
import cashback from '../assets/cashback.jpg';

const imglist = {img1,img2,img3,img4,img5};
const imglist2 = {cashback,img5,img2,img3,img4};

const loremIpsum = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae"+
      "consectetur iste error veritatis magnam expedita, animi mollitia dolorum a"+
      "voluptatum dicta sapiente cumque ut assumenda";

</script>

<template>
  <div class="flex w-full">
  <div class="w-2/3 p-1">
    <Swiper
      class="container p-3 flex justify-between"
      :modules="[SwiperAutoplay,SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: false
      }"
      :pagination="{
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
      }"
    >
    <SwiperSlide v-for="img in imglist" :key="img">
      <h1 class="p1 ml-12">JOIN GLOBAL BET</h1>
     <p class="p2 ml-12">{{loremIpsum}}</p>
      <button type="button" class="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 
      hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600
       dark:hover:bg-red-700 dark:focus:ring-red-800 b1">JOIN NOW</button>
      <img :src=img class="ml-2">
    </SwiperSlide>
    <div class="swiper-pagination margin"></div>
    </Swiper>
    </div>

<div class="w-1/3 p-1">
    <Swiper
      :modules="[SwiperAutoplay,SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: false
      }"
      :pagination="{
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
      }"
      >
    <SwiperSlide v-for="img in imglist2" :key="img">
      <img :src=img class="mr-6">
      <p class="p3">CASH BACK 5%</p>
      <p class="p4">View more </p> 
    </SwiperSlide>
    <div class="swiper-pagination"></div>
    </Swiper>
  </div>
  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: space-evenly;
  align-items: top;
  height: 40vh;
  font-weight: bold; 
}
img{
    width: 100%;
    height: 100%;
    object-fit: fill;
    image-rendering: pixelated;
    image-rendering: auto;
    image-rendering: crisp-edges;
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
  font-weight: 700;
  font-size:30px;
  left:0%;
  color: white;
  margin-top: 4%;
  width: 55%;
  font-family: 'Lexend', sans-serif;
}

.p2{
  position: absolute;
  font-weight: 400;
  font-size:16px;
  left:0%;
  color: white;
  margin-top: 9%;
  width: 30%;
  font-family: 'Lexend', sans-serif;
}

.p3{
  position: absolute;
  font-weight: 500;
  font-size:32px;
  left:0%;
  color: white;
  margin-top: 16pc;
  width: 50%;
  font-family: 'Lexend', sans-serif;
}

.p4{
  position: absolute;
  font-weight: 600;
  font-size:15px;
  left:0%;
  color: white;
  margin-top: 20pc;
  width: 40%;
  font-family: 'Lexend', sans-serif;
}

.b1{
  position: absolute;
  width: 15%;
  margin-top: 16pc;
  left:5ch
}

.container {
  justify-content: space-evenly ;
}
.swiper-pagination {
    @apply mt-0;
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: red;
  opacity: 1;
}

/* target all bullets */
.swiper-pagination-bullet {
  @apply h-1 w-9 rounded-none;
  background-color: white;
  opacity: 1;
}

.margin{
  margin-left: -26pc;
}
</style>

