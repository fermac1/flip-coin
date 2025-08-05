<template>
  <div class="w-full mt-10">
    <div
      class="bg-[#dedede] flex gap-20 px-8 py-12 rounded-lg transition-all duration-500 ease-in-out"
      key="carousel"
    >
      <div class="w-[50%]">
        <img :src="currentStep?.image" :alt="`Step ${currentStepIndex + 1}`" class="w-[100%]" />
      </div>
      <div class="text-left p-4 w-[50%]">
        <!-- {{ currentStep.title }} -->

        <img :src="currentStep?.title" :alt="`STEP ${currentStepIndex + 1}`" class="w-[20%]" />

        <div class="py-4">
            <p class="font-bold">{{ currentStep?.heading }}</p>
            <p class="text-[14px]">{{ currentStep?.subheading }}</p>
        </div>

        <ul class="text-[14px] space-y-6">
            <li v-for="(item, index) in currentStep?.list" :key="index" class="flex items-start gap-2">
                <!-- Custom bullet -->
                <span class="w-3 h-3 bg-[#022629] rounded-full flex-shrink-0 self-center mt-0.5"></span>
                <span class="leading-snug">{{ item }}</span>
            </li>
        </ul>

        <div class="mt-10">
            <!-- Arrows -->
            <button
              @click="prevStep"
              
            >
              <img src="~/assets/images/previous_button.png" alt="" class="w-[75%] ">
            </button>
            <button
              @click="nextStep"
            >
             <img src="~/assets/images/next_button.png" alt="" class="w-[75%]">
            </button>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

// Carousel data
const steps = [
  {
    image: new URL('~/assets/images/step1.png', import.meta.url).href,
    title: new URL('~/assets/images/STEP 1.png', import.meta.url).href,
    heading: "SIGN UP TO CREATE AN ACCOUNT",
    subheading: "This is where we get to know you-just a little",
    list: [
        "Enter your full name: This name will appear on your profile and wallet dashboard.",
        "Use a valid email so we can keep your account secure and send you important updates. You'll also need it for login and verification.",
        "Create a Strong Password by choosing a secure password that includes a mix of uppercase, lowercase, numbers, or special characters.",
        "Add your phone number for extra security and quick recovery options.",
    ]
  },
  {
    image: new URL('~/assets/images/step2.png', import.meta.url).href,
      title: new URL('~/assets/images/STEP 2.png', import.meta.url).href,
      heading: "VERIFY YOUR EMAIL ADDRESS",
      subheading: "To keep your account secure and unlock full access, please verify your email address.",
      list: [
          "Check Your Inbox: We will send a verification link to the email you used during sign-up.",
          "Click the Link: Open the email and tap the “Verify My Email” button.",
        "You're In!: Once verified, you’ll be redirected to your dashboard. You can now start flipping coins, earning rewards, and exploring the platform."
    ]
  },
  {
    image: new URL('/assets/images/step3.png', import.meta.url).href,
      title: new URL('/assets/images/STEP 3.png', import.meta.url).href,
      heading: "SETUP YOUR FLIPCOIN WALLET",
      subheading: "Once you're in, your wallet is automatically created—no technical setup required.",
      list: [
          "Secure Your Wallet: Set up 2FA (two-factor authentication) for extra protection. You’ll also get a recovery phrase—store it safely, as it’s your backup access.",
          "Fund Your Wallet: Top up using your preferred method—local currency, crypto, or card. ",
        "You're In!: Once verified, you’ll be redirected to your dashboard. You can now start flipping coins, earning rewards, and exploring the platform."
    ]
    },
  {
    image: new URL('~/assets/images/step4.png', import.meta.url).href,
      title: new URL('~/assets/images/STEP 4.png', import.meta.url).href,
      heading: "START FLIPPING ON FLIPCOIN",
      subheading: "Log In to Your FlipCoin Dashboard",
      list: [
          " Choose a Coin to Flip: Browse available cryptocurrencies—Bitcoin, Ethereum, or trending tokens.",
          "Set Your Flip Amount: Decide how much to stake. You’ll see the potential reward before confirming.",
          "Tap “Flip”: Watch the animation and see where the coin lands, If you win, your reward is added to your wallet immediately.",
        "Repeat, Learn & Withdraw: Keep flipping, grow your wallet, or withdraw anytime. Track your flips, manage your coins, and level up as you learn."
    ]
  },
]

const currentStepIndex = ref(0)

const currentStep = computed(() => steps[currentStepIndex.value])

const nextStep = () => {
  currentStepIndex.value = (currentStepIndex.value + 1) % steps.length
}

const prevStep = () => {
  currentStepIndex.value = (currentStepIndex.value - 1 + steps.length) % steps.length
}
</script>

