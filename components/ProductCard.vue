<script lang="ts" setup>
const { product } = defineProps(["product"])
</script>

<template>
    <div class="card text-center">
        <img :src="product.image" alt="product title" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <!-- <p class="font-bold text-gray-500 m-4 truncate">$ {{ product.price }}</p> -->
        <nuxt-link :to="`/products/${product.id}`">
            <p class="btn my-4">View details</p>
        </nuxt-link>
    </div>
</template>

<style>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>
