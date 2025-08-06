<template>
    <nav class="backdrop-blur-[32.2969970703125px] backdrop-saturate-150 w-full px-4 md:px-6 py-4 space-y-2 flex md:flex-nowrap flex-wrap items-center justify-between text-[#ffffff]">
       <!-- Logo -->
        <div class="text-white font-bold text-2xl">
            <!-- <img src="~/assets/images/flipcoin_logo.png" alt="flip coin logo" class="md:w-[90%]"> -->
            <p class="font-covered_by_your_grace font-normal text-[30px] text-[#ffffff]">Flipcoin</p>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex gap-1 bg-[#f3f3f3] text-black rounded-lg p-1">
              <NuxtLink
                v-for="item in navItems"
                :key="item.route"
                :to="item.route"
                class="px-4 py-1.5 rounded-lg text-[14px] font-normal transition-all duration-200"
                :class="[
                $route.path === item.route
                    ? 'bg-[#052225] text-[#fcfcfc]'
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
        <button class="px-5 py-2 rounded-[10px] border border-[#5BC485] text-[#ffffff] transition text-[14px] font-bold font-craftwork"
        style="box-shadow: inset 0 1px 1px 0 #5BC485;"
            onmouseover="this.style.boxShadow='0 4px 6px #5BC485'"
            onmouseout="this.style.boxShadow='inset 0 0 1px 1px #5BC485'">
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
