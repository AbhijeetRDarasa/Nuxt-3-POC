<template>
<nav class="border-gray-200 bg-black dark:bg-gray-800 dark:border-gray-700 m-2">
  <div class="max-w-screen-lg flex flex-wrap items-center justify-between p-2">
    <a href="#" class="flex">
        <img src="../assets/asset.svg" class="h-8" alt="KUN88 Logo" />
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-0 rounded-lg bg-white-50 text-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li><nuxt-link to="/">SPORTS</nuxt-link></li>
          <li><nuxt-link to="/#">LIVE</nuxt-link></li>
          <li><nuxt-link to="/#">VIRTUAL SPORTS</nuxt-link></li>
      </ul>
    </div>
  </div>
</nav>

<div class="p-1 m-2 w-full">
        <slot></slot>
    </div>
</template>
