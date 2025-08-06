<!-- <script setup lang="ts">
import { ref, onMounted } from 'vue'

const items = [
  'https://picsum.photos/528/528?random=1',
  'https://picsum.photos/528/528?random=2',
  'https://picsum.photos/528/528?random=3',
  'https://picsum.photos/528/528?random=4',
  'https://picsum.photos/528/528?random=5',
  'https://picsum.photos/528/528?random=6'
]

const cardRefs = ref<HTMLElement[]>([])
const activeIndex = ref<number>(0)

const scrollToCard = (index: number) => {
  const card = cardRefs.value[index]
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }
}

const isActive = (index: number) => activeIndex.value === index

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.value.findIndex((el) => el === entry.target)
        if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
          activeIndex.value = index
        }
      })
    },
    {
      root: document.querySelector('#carousel'),
      threshold: 0.8
    }
  )

  cardRefs.value.forEach((el) => {
    if (el) observer.observe(el)
  })

  scrollToCard(0)
})
</script>

<template>
  <div class="w-full overflow-hidden py-10">
    <div
      id="carousel"
      class="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-8"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        :ref="el => cardRefs[index] = el"
        @click="scrollToCard(index)"
        class="snap-center flex-shrink-0 transition-all duration-300 cursor-pointer w-[70%] max-w-[528px]"
        :class="isActive(index)
          ? 'opacity-100 scale-100'
          : 'opacity-10 scale-95'"
      >
        <img
          :src="item"
          alt="carousel image"
          class="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style> -->


<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Testimonial {
  title: string
  content: string
  name: string
  location: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    title: '“Crypto, Finally Made Simple”',
    content:
      "I’ve tried a few crypto apps, but FlipCoin is by far the most beginner-friendly. I started flipping and earning within minutes!",
    name: 'Matt Cannon',
    location: 'San Diego, CA',
    avatar: 'https://i.pravatar.cc/48?img=1'
  },
  {
    title: '“Perfect for Crypto Newbies”',
    content:
      'FlipCoin is perfect for crypto newbies like me. No complex setup, just tap, flip, and earn.',
    name: 'Aliyah T',
    location: 'Cape Town, South Africa',
    avatar: 'https://i.pravatar.cc/48?img=2'
  },
  {
    title: '“Fun Way to Learn and Earn”',
    content:
      'I referred some friends and got rewarded instantly. The referral program really works!',
    name: 'Anab K.',
    location: 'Lagos, Nigeria',
    avatar: 'https://i.pravatar.cc/48?img=3'
  }
]

const cardRefs = ref<HTMLElement[]>([])
const activeIndex = ref<number>(0)

const scrollToCard = (index: number) => {
  const card = cardRefs.value[index]
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }
}

const isActive = (index: number) => activeIndex.value === index

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.value.findIndex((el) => el === entry.target)
        if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
          activeIndex.value = index
        }
      })
    },
    {
      root: document.querySelector('#testimonial-carousel'),
      threshold: 0.8
    }
  )

  cardRefs.value.forEach((el) => {
    if (el) observer.observe(el)
  })

  scrollToCard(0)
})
</script>

<template>
  <div class="w-full overflow-hidden py-16 bg-white">
    <div
      id="testimonial-carousel"
      class="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth px-8"
    >
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :ref="el => cardRefs[index] = el"
        @click="scrollToCard(index)"
        class="snap-center flex-shrink-0 transition-all duration-300 cursor-pointer w-[80%] md:w-[500px] p-6 rounded-xl shadow-lg"
        :class="isActive(index)
          ? 'bg-[#01322f] text-white scale-100'
          : 'bg-[#f3f3f3] text-black opacity-60 scale-95'"
      >
        <div class="space-y-4">
          <p class="text-lg font-semibold text-emerald-300">
            {{ testimonial.title }}
          </p>
          <p class="text-sm">
            {{ testimonial.content }}
          </p>
          <div class="flex items-center gap-3 pt-4">
            <img :src="testimonial.avatar" class="w-10 h-10 rounded-full" />
            <div class="text-sm leading-tight">
              <p class="font-semibold">{{ testimonial.name }}</p>
              <p class="text-xs opacity-70">{{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
