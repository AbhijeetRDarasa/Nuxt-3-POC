<template>
    <div class="card text-center">
        <img :src="prod.image" alt="Product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{prod.title}}</p>
        <nuxt-link :to="`/products/${prod.id}`">
            <p class="btn my-4">View Details </p>
        </nuxt-link>
    </div>
</template>

<script setup>
    const { prod } = defineProps(['prod']);
</script>

<style scoped>
.thumb{
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>