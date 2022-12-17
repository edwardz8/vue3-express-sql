<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'

const items = ref([])

async function getProducts() {
  try {
    const response = await axios.get('http://localhost:5000/products')
    items.value = response.data
    console.log(items.value, 'items')
  } catch (err) {
    console.log(err)
  }
}

async function deleteProduct(id: any) {
  try {
    await axios.delete(`http://localhost:5000/products/${id}`)
    getProducts()
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getProducts()
})
</script>

<template>
  <div>
    <table v-if="items">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>
            {{ item.name }}
          </td>
          <td>${{ item.price }}</td>
          <td>
            <div>
              <span class="btn-margin">
                <router-link :to="{ name: 'Edit', params: { id: item.id } }">Edit</router-link>
              </span>
              <a @click="deleteProduct(item.id)">Delete</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.btn-margin {
  margin-right: 1rem;
}
</style>