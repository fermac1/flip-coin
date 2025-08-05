<template>
    <div class="min-h-screen bg-[#022629] text-white px-20 pt-10 pb-0">
        <div class="">
            <TopNavBar/>
            <div class="mt-[120px]">
                <div class="text-center items-center">
                    <div class="flex items-center justify-center">
                        <img src="~/assets/images/Tap. Flip. Own Crypto..png" alt="tap-flip" class="w-[70%]">
                    </div>
                    <div class="text-[16px] text-[#ffffff] font-[400] mt-4 mb-10">
                        <p>The easiest way to trade and earn.</p>
                        <p>Start flipping your way to financial freedom, one coin at a time.</p>
                    </div>

                    <div class="mt-10 text-[#ffffff] text-[14px] relative">
                        <button class="relative z-10 px-5 py-2 rounded-[10px] border border-[#5BC485] transition-all duration-300"
                        style="box-shadow: inset 0 1px 1px 0 #5BC485;"
                          onmouseover="this.style.boxShadow='0 4px 6px #5BC485'"
                            onmouseout="this.style.boxShadow='inset 0 0 1px 1px #5BC485'">
                            Start flipping now
                        </button>
                        <span
                            class="absolute inset-0 rounded-md border border-green-400 animate-pulse opacity-20 blur-md"
                        ></span>
                    </div>

                    <div>
                        <img src="~/assets/images/coins.png" alt="coins" class="w-[100%]">
                    </div>

                     <!-- <button
                        class="relative px-6 py-2 text-white font-medium rounded-md border border-green-400
                            backdrop-blur-md bg-white/5 shadow-md transition
                            hover:bg-white/10 hover:shadow-green-400/50"
                    >
                        <span class="relative z-10">Start flipping now</span> -->
                        <!-- Glowing border effect -->
                        <!-- <span
                        class="absolute inset-0 rounded-md border border-green-400 animate-pulse opacity-20 blur-md"
                        ></span> -->
                    <!-- </button> -->
                </div>
            </div>

        </div>
    </div>
    
    <!-- Carousel -->
    <div class="bg-[#ffffff] px-20 py-10 text-center" id="how-it-works">
        <div class="flex items-center justify-center">
            <p class="font-bold text-[#161616] text-[24px]">How it Works</p>
            <img src="~/assets/images/stacked-coins.png" alt="">
        </div>
        <div class="text-[#000000] text-[16px] mt-2 font-[400]">
            <p>Flipcoin is a gamified, beginner-friendly crypto platform.</p>
            <p>It's secure, transparent, and perfect for quick low-stakes trading.</p>
        </div>

        <!-- <div class="bg-[#dedede] flex gap-10 px-8 py-12 rounded-lg mt-10"> -->
            <!-- <div>
                <img src="~/assets/images/step1.png" alt="">
            </div>
            <div>
                STEP 1
            </div> -->

            <Carousel/>
        <!-- </div> -->
    </div>


    <!-- Footer -->
    <Footer/>
</template>

<script lang="ts" setup>
 
</script>

<style scoped>

</style>