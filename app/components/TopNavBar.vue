<template>
    <nav class="bg-white/10 backdrop-blur-md backdrop-saturate-150 w-full px-6 py-4 flex items-center justify-between text-[#ffffff]">
       <!-- Logo -->
        <div class="text-white font-bold text-2xl">
            <img src="~/assets/images/flipcoin_logo.png" alt="flip coin logo" class="w-[90%]">
        </div>

        <!-- Navigation Tabs -->
        <div class="flex gap-1 bg-[#f3f3f3] text-black rounded-lg p-1">
              <NuxtLink
                v-for="item in navItems"
                :key="item.route"
                :to="item.route"
                class="px-4 py-1.5 rounded-lg text-[14px] font-[400] transition-all duration-200"
                :class="[
                $route.path === item.route
                    ? 'bg-[#000000] text-[#ffffff]'
                    : 'hover:bg-gray-200 text-black'
                ]"
            >
                {{ item.label }}
            </NuxtLink>
        <!-- <button
            v-for="item in navItems"
            :key="item"
            @click="activeTab = item"
            :class="[
            'px-4 py-1.5 rounded-lg text-[14px] font-[400] transition-all duration-200',
            activeTab === item
                ? 'bg-[#000000] text-[#ffffff]'
                : 'hover:bg-gray-200'
            ]"
        >
            {{ item }}
        </button> -->
        </div>

        <!-- Get Started Button -->
        <button class="px-5 py-2 rounded-[10px] border border-[#5BC485] text-[#ffffff] transition text-[14px]">
         Get started
        </button>
    </nav>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'

// const navItems = ['Home', 'About', 'FAQs']
    const navItems = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'FAQs', route: '/faq' }
]
    const activeTab = ref('Home')
</script>
