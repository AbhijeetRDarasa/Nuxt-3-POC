<template>
<nav class="border-gray-200 bg-black dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
    <a href="#" class="flex">
        <img src="../assets/asset.svg" class="h-8" alt="KUN88 Logo" />
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-white-50 text-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li><nuxt-link to="/">SPORTS</nuxt-link></li>
          <li><nuxt-link to="/about">LIVE</nuxt-link></li>
          <li><nuxt-link to="/products" class="btn">VIRTUAL SPORTS</nuxt-link></li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mx-auto p-4">
        <slot></slot>
    </div>
</template>
