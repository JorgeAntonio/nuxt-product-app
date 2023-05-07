<script lang="ts" setup>
definePageMeta({
    layout: "products",
})

const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
    throw createError({
        statusCode: 404,
        message: "Product not found",
        fatal: true,
    })
}

</script>
<template>
    <div>
        <Head>
            <Title>{{ product.title }} | Merch</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>
