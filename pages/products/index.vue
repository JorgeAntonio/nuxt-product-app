<script lang="ts" setup>
definePageMeta({
    layout: "products",
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt Product | Merch',
    meta: [{ name: 'description', content: 'Nuxt Product app built with Nuxt' }]
})

</script>

<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products">
            <ProductCard :product="p" />
        </div>
    </div>
</template>
