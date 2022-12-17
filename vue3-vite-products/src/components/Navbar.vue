<script setup lang="ts">
import { ref } from 'vue'

const navList = ref([
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Create',
        path: '/create',
    },
])
</script>

<template>
    <nav>
        <div>
          <!--   <router-link to="/">
            </router-link> -->
        </div>
        <div class="navbar-menu">
            <div v-for="navItem in navList" :key="`nav-${navItem.name}`">
                <router-link :to="navItem.path">{{ navItem.name }}</router-link>
            </div>
        </div>
    </nav>
</template>