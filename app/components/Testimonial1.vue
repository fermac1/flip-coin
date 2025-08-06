<template>
  <div class="relative w-full overflow-hidden py-16">
    <!-- Scrollable Row -->
    <div
      ref="scrollContainer"
      class="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-8 md:px-32"
    >
      <div
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.name"
        :ref="el => cardRefs[index] = el"
        @click="scrollToCard(index)"
        class="flex-shrink-0 w-[80%] md:w-[400px] snap-center rounded-xl p-6 cursor-pointer transition-all duration-300 transform"
        :class="isActive(index)
          ? 'bg-[#022629] text-white scale-105 z-10'
          : 'bg-[#f5f5f5] text-black opacity-60 scale-95 z-0'"
      >
        <p class="text-lg font-semibold mb-4">“{{ testimonial.title }}”</p>
        <p class="text-sm mb-6">{{ testimonial.description }}</p>
        <div class="flex items-center gap-3 mt-auto">
          <img
            :src="testimonial.avatar"
            alt="avatar"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p class="font-medium">{{ testimonial.name }}</p>
            <p class="text-sm opacity-70">{{ testimonial.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Testimonial {
  title: string
  description: string
  name: string
  location: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    title: 'Refer and Earn',
    description: 'I invited a few friends and got rewarded instantly. The referral system really works!',
    name: 'Aminab K.',
    location: 'Lagos, Nigeria',
    avatar: '/avatars/1.png'
  },
  {
    title: 'Crypto, Finally Made Simple',
    description: 'FlipCoin is by far the most beginner-friendly. I started flipping and earning within minutes!',
    name: 'Matt Cannon',
    location: 'San Diego, CA',
    avatar: '/avatars/2.png'
  },
  {
    title: 'Perfect for Crypto Newbies',
    description: 'FlipCoin is perfect for crypto newbies like me. No confusion, just tap, flip, and earn.',
    name: 'Aliyah T',
    location: 'Cape Town, South Africa',
    avatar: '/avatars/3.png'
  }
]

const cardRefs = ref<HTMLElement[]>([])
const activeIndex = ref<number>(1) // Start with the second card active
const scrollContainer = ref<HTMLElement | null>(null)

const isActive = (index: number) => activeIndex.value === index

const scrollToCard = (index: number) => {
  const card = cardRefs.value[index]
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }
}

// Observe when a card becomes visible enough
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.value.findIndex((el) => el === entry.target)
        if (entry.isIntersecting && entry.intersectionRatio >= 10) {
          activeIndex.value = index
        }
      })
    },
    {
      root: scrollContainer.value,
      threshold: 0.8 // Detect mostly visible card
    }
  )

  cardRefs.value.forEach((el) => {
    if (el) observer.observe(el)
  })

  // Center the default active card on load
  scrollToCard(activeIndex.value)
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
