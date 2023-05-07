<script lang="ts" setup>
const { data } = await useFetch('/api/products?name=Mario', {
    method: 'post',
    body: { age: 30 }
})
</script>

<template>
    <div class="pb-7">
        <h1 class="text-3xl font-semibold py-4">Nuxt product app</h1>
        <p>Product app built with Nuxt</p>
        <div>{{ data }}</div>
    </div>
</template>
