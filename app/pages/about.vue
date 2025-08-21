<template>
    <div class="min-h-screen bg-[#ffffff] text-white px-8 md:px-20 pt-10 pb-0 relative">
        <TopNavBar class="bg-[#f3f3f3]"/>
        <div class="absolute inset-0 top-[150px] bg-cover bg-no-repeat bg-left-top bg-[url(/images/bg-about-us.png)]"
            style="background-size: cover;">
            </div>
    
            <div class="z-10 relative text-[#161616] mt-[50px] md:mt-[120px] mb-[50px] p-4 md:p-8" id="who-we-serve">
                <div class="text-center">
                    <p class="font-craftwork text-[32px] md:text-[64px] font-semibold">Who we serve</p>
                    <p class="font-instrument text-[16px] md:text-[20px] font-light">FlipCoin is built for anyone looking to start or simplify their crypto journey 
                        no prior experience required.
                    </p>
                </div>

                <!-- Target users -->
               <Serve/>

                <div class="text-left md:w-[70%] mt-[30px] mb-[30px] md:mt-[100px] md:mb-[50px]">
                    <p class="font-covered_by_your_grace font-light text-[32px] md:text-[58px]">Make digital currency simple, fun, and rewarding.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F0F1F4] p-4 md:p-6 font-instrument rounded-2xl">
                    <!-- Mission -->
                    <div class="bg-[#FCFCFC] p-4 rounded-2xl flex flex-col">
                        <div>
                        <p class="font-bold text-[18px] md:text-[22px] text-[#022629DB]">Our Mission</p>
                        <p class="font-light text-[16px] md:text-[18px] text-[#4A4A4A]">
                            Our mission is to lower the barrier to crypto adoption through intuitive design, instant flipping, and a community-driven referral system. Whether you're a beginner or just want a smoother, more engaging way to earn, FlipCoin is your easiest way in.
                        </p>
                        </div>
                        <div class="flex justify-end mt-auto">
                        <img src="~/assets/images/mission-paint.png" alt="Mission" class="m-0" />
                        </div>
                    </div>

                    <!-- Vision -->
                    <div class="bg-[#FCFCFC] p-4 rounded-2xl flex flex-col">
                        <div>
                        <p class="font-bold text-[18px] md:text-[22px] text-[#022629DB]">Our Vision</p>
                        <p class="font-light text-[16px] md:text-[18px] text-[#4A4A4A]">
                            To make crypto ownership as easy and engaging as flipping a coin — empowering anyone, anywhere to join the digital economy with confidence and simplicity.
                        </p>
                        </div>
                        <div class="flex justify-end mt-auto">
                        <img src="~/assets/images/vision-paint.png" alt="Vision" class="m-0" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    <!-- </div> -->

    <div>
        <!-- footer -->
        <Footer/>
    </div>
</template>

<script lang="ts" setup>
 
</script>
