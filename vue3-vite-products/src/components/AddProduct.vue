<script setup lang="ts">
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

// const route = useRoute()
const router = useRouter()

const name = ref('')
const price = ref('')

async function saveProduct() {
    try {
        await axios.post('http://localhost:5000/products', {
            name: name.value,
            price: price.value
        })
        name.value = '',
        price.value = ''
        router.push('/')
    } catch (err) {
        console.log(err)
    }
}

/* const emits = defineEmits<{
    (e: 'add-new-item', item: Item): void
}> */
</script>

<template>
    <div>
        <div class="field">
            <label class="label">Product Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Name" v-model="name" />
            </div>
        </div>

        <div class="field">
            <label class="label">Price</label>
            <div class="control">
                <input class="input" type="text" placeholder="Price" v-model="price" />
            </div>
        </div>

        <button @click="saveProduct">Save</button>
    </div>
</template>