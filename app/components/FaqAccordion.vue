<template>
  <div class="w-full max-w-3xl mx-auto space-y-4">
    <div
      v-for="(faq, index) in faqs"
      :key="index"
       :class="[
        'rounded-lg overflow-hidden transition',
        openIndex === index ? 'border border-gray-300' : 'border-none'
      ]"
    >
      <!-- FAQ Question -->
      <button
        @click="toggleFaq(index)"
        class="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 hover:bg-gray-50 transition font-instrument"
      >
        <span :class="openIndex === index ? 'text-[#5BC485] text-[22px] font-semibold' : 'text-[20px] font-normal'">
          {{ faq.question }}
        </span>
        <img class="w-5 h-5 transition-transform" 
        :class="openIndex === index ? 'rotate-45 text-green-600' : 'rotate-0'"
        src="~/assets/images/arrow-expand-diagonal-01.png" alt="arrow-expand">
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5 transition-transform"
          :class="openIndex === index ? 'rotate-45 text-green-600' : 'rotate-0'"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg> -->
      </button>

      <!-- FAQ Answer -->
      <div
        v-if="openIndex === index"
        class="px-4 pb-4 text-[19px] text-[#191919] font-light"
      >
        {{ faq.answer }}
      </div>
      <!-- Gradient Line Divider (hidden when open) -->
      <div
        v-if="openIndex !== index && index < faqs.length - 1"
        class="w-4/5 mx-auto h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-6"
      ></div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Faq {
  question: string
  answer: string
}

const faqs: Faq[] = [
  {
    question: 'What is Flipcoin?',
    answer:
      'FlipCoin is a gamified crypto platform that lets you flip coins, earn crypto rewards, and refer friends — all in a few taps.'
  },
  {
    question: 'Is FlipCoin safe to use?',
    answer: 'Yes, FlipCoin uses blockchain technology and secure encryption to keep your assets safe.'
  },
  {
    question: 'How do I start flipping?',
    answer: 'Simply create an account, choose a coin, set your flip amount, and start flipping instantly.'
  },
  {
    question: 'Is FlipCoin available in my country?',
    answer: 'FlipCoin is available in many countries worldwide. Please check our availability page for details.'
  },
  {
    question: 'Can I withdraw my rewards?',
    answer: 'Yes, you can withdraw your rewards directly to your crypto wallet anytime.'
  }
]

const openIndex = ref<number | null>(0) // default open first FAQ

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
