<template>
    <div class="md:min-h-screen bg-[#022629] text-white px-8 md:px-20 md:pt-10 pt-4 pb-0 relative bg-cover bg-no-repeat md:bg-left-top bg-[url(/images/bg-vector.png)]"
        style="background-size: 50% 50%; background-position: top left;">
        <div class="absolute inset-0 bg-[#022629] bg-opacity-70"></div>
        <div class="z-10 relative">
        <!-- style="background-image: url('~/assets/images/STEP 1.png'); background-size: 50% 50%; -->
        <HomeTopNavBar/>
            <div class="mt-10 md:mt-[120px] mb-0">
                <div class="text-center items-center">
                    <div class="flex items-center justify-center">
                      <p class="font-covered_by_your_grace font-normal text-[40px] md:text-[128px] text-[#ffffff]">Tap. Flip. Own Crypto.</p>
                    </div>
                    <div class="text-[18px] text-[#ffffff] font-light mt-4 mb-10">
                        <p>The easiest way to trade and earn.</p>
                        <p>Start flipping your way to financial freedom, one coin at a time.</p>
                    </div>

                    <div class="mt-10 text-[#ffffff] text-[14px] relative">
                        <button class="relative z-10 px-5 py-2 rounded-[10px] border border-[#5BC485] transition-all duration-300 font-semibold text-[16px]"
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
                        <img src="~/assets/images/coins.png" alt="coins" class="w-full md:w-[100%] block">
                    </div>

                </div>
            </div>

        </div>
    </div>
    
    <!-- Carousel -->
    <div class="bg-[#ffffff] px-10 md:px-20 py-10 text-center" id="how-it-works">
        <div class="flex md:flex-row flex-col items-center justify-center">
            <p class="font-bold text-[#161616] text-[24px] font-craftwork">How it Works</p>
            <img src="~/assets/images/stacked-coins.png" alt="">
        </div>
        <div class="text-[#000000] text-[16px] mt-2 font-[400] font-instrument">
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
    
    <!-- Testimonial -->
     <Testimonial/>

    <!-- Footer -->
    <Footer/>
</template>

<script lang="ts" setup>
 
</script>

<style scoped>

</style>