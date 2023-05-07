<script lang="ts" setup>

</script>

<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
            <NuxtLink to="/products" class="font-bold">Nuxt Product Merch</NuxtLink>
        </nav>
    </header>
    <main class="container mx-auto p-4">
        <slot />
    </main>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/products">Products</nuxt-link></li>
        </ul>
        <p>&copy; {{ new Date().getFullYear() }}</p>
    </footer>
</template>
