<template>
    <nav class="bg-[#f3f3f3] w-full px-4 md:px-6 py-4 space-y-2 flex md:flex-nowrap flex-wrap items-center justify-between text-[#ffffff] rounded-3xl">
       <!-- Logo -->
        <div class="text-white font-bold text-2xl">
           <p class="font-covered_by_your_grace font-normal text-[30px] text-[#191919]">Flipcoin</p>
        </div>

         <!-- Mobile Menu Toggle Button -->
        <button class="md:hidden text-[#052225] focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button>

      <!-- Navigation Tabs -->
        <div
        class="flex-col md:flex md:flex-row gap-1 bg-[#ffffff] text-[#052225] rounded-lg p-1 md:p-1"
        :class="[
            isMenuOpen ? 'flex w-full mt-4' : 'hidden',
            'md:flex md:items-center md:mt-0 md:w-auto'
        ]"
        >
        <!-- <NuxtLink
            v-for="item in navItems"
            :key="item.route"
            :to="item.route"
            class="px-4 py-1.5 rounded-lg text-[14px] font-normal transition-all duration-200"
            :class="[
            $route.path === item.route
                ? 'bg-[#052225] text-[#fcfcfc]'
                : 'hover:bg-[#f3f4f7] text-[#052225]'
            ]"
        >
            {{ item.label }}
        </NuxtLink> -->

        <NuxtLink
            v-for="item in navItems"
            :key="item.route"
            :to="item.route"
            class="px-4 py-1.5 rounded-lg text-[14px] font-normal transition-all duration-200"
            exact-active-class="bg-[#052225] text-[#fcfcfc]" 
            active-class="bg-[#052225] text-[#fcfcfc]"
             @click="isMenuOpen = false"
        >
            {{ item.label }}
        </NuxtLink>
        </div>

        <!-- Get Started Button -->
        <button class="px-5 py-2 rounded-lg border border-[#022629] text-[#191919] transition text-[14px] font-bold font-craftwork"
        style="box-shadow: inset 0 1px 1px 0 #022629;"
            onmouseover="this.style.boxShadow='0 4px 6px #022629'"
            onmouseout="this.style.boxShadow='inset 0 0 1px 1px #022629'">
         Get started
        </button>
    </nav>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    const navItems = [
        { label: 'Home', route: '/' },
        { label: 'About', route: '/about' },
        { label: 'FAQs', route: '/faq' }
    ]
const activeTab = ref('Home')
    const isMenuOpen = ref(false)
</script>
