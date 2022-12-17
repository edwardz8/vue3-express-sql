<script setup lang="ts">
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

const name = ref('')
const price = ref('')

onMounted(() => {
    getProductById()
})

async function getProductById() {
    try {
        const response = await axios.get(`http://localhost:5000/products/${route.params.id}`)
        name.value = response.data.name
        price.value = response.data.price
    } catch (err) {
        console.log(err)
    }
}

async function updateProduct() {
    try {
        await axios.put(`http://localhost:5000/products/${route.params.id}`, {
            name: name.value,
            price: price.value
        })
        name.value = '',
            price.value = '',
            router.push('/')
    } catch (err) {
        console.log(err)
    }
}
</script>

<template>
    <div>
        <div class="field">
            <label class="label">Product Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Product Name" v-model="name" />
            </div>
        </div>

        <div class="field">
            <label class="label">Price</label>
            <div class="control">
                <input class="input" type="text" placeholder="Price" v-model="price" />
            </div>
        </div>

        <div class="control">
            <button class="button is-success" @click="updateProduct">UPDATE</button>
        </div>
    </div>
</template>