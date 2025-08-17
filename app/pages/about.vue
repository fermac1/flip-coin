<template>
    <div class="min-h-screen bg-[#ffffff] text-white px-8 md:px-20 pt-10 pb-0 relative">
        <TopNavBar class="bg-[#f3f3f3]"/>
        <div class="absolute inset-0 top-[150px] bg-cover bg-no-repeat bg-left-top bg-[url(/images/bg-about-us.png)]"
            style="background-size: cover;">
            </div>
    
            <div class="z-10 relative text-[#161616] mt-[50px] md:mt-[120px] mb-[50px] p-4 md:p-8" id="who-we-serve">
                <div class="text-center">
                    <p class="font-craftwork md:text-[64px] font-semibold">Who we serve</p>
                    <p class="font-instrument text-[16px] md:text-[20px] font-light">FlipCoin is built for anyone looking to start or simplify their crypto journey 
                        no prior experience required.
                    </p>
                </div>

                <!-- Target users -->
                <section class="relative bg-white py-12 px-6 md:px-10 font-instrument overflow-hidden">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <!-- Left side: stacked images -->
                    <div class="flex flex-col space-y-4">
                        <div class="flex space-x-4">
                        <img src="../assets/images/about-img1.jpg" alt="User" class="shadow-md transform rotate-[12.69deg] w-1/2 h-1/2 overflow-hidden md:h-80" />
                        <img src="../assets/images/about-img2.jpg" alt="User" class="shadow-md w-1/2 h-1/2 transform rotate-[12.69deg] overflow-hidden" />
                        </div>
                        <img src="../assets/images/about-img3.jpg" alt="User" class="shadow-md w-full" />
                    </div>

                    <!-- Right side: bullet points -->
                    <div class="relative z-10">
                        <ul class="space-y-8 text-lg md:text-2xl text-[#000000] font-covered_by_your_grace relative">
                            <!-- Item 1 -->
                            <li class="flex items-center space-x-3 relative">
                            <!-- Circle -->
                             <img src="../assets/images/about-tick.png" alt="" class="rounded-full border-2 p-2">
                            <!-- <span class="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-400 bg-[#022629E5] text-white relative z-10">
                                ✔
                            </span> -->
                            <!-- Dotted line (below) -->
                            <span class="absolute top-14 left-3 w-px h-6 border-l-2 border-dotted border-gray-400"></span>
                            <span class="text-[16px] md:text-[24px]">First-time crypto users</span>
                            </li>

                            <!-- Item 2 -->
                            <li class="flex items-center space-x-3 relative">
                            <img src="../assets/images/about-tick.png" alt="" class="rounded-full border-2 p-2">
                            <span class="absolute top-14 left-3 w-px h-6 border-l-2 border-dotted border-gray-400"></span>
                            <span class="text-[16px] md:text-[24px]">Casual investors</span>
                            </li>

                            <!-- Item 3 -->
                            <li class="flex items-center space-x-3 relative">
                            <img src="../assets/images/about-tick.png" alt="" class="rounded-full border-2 p-2">
                            <span class="absolute top-14 left-3 w-px h-6 border-l-2 border-dotted border-gray-400"></span>
                            <span class="text-[16px] md:text-[24px]">Crypto-curious students and young professionals</span>
                            </li>

                            <!-- Item 4 (last one, no dotted line) -->
                            <li class="flex items-center space-x-3 relative">
                            <img src="../assets/images/about-tick.png" alt="" class="rounded-full border-2 p-2">
                            <span class="text-[16px] md:text-[24px]">Globally connected users</span>
                            </li>
                        </ul>
                    </div>

                    </div>

                    <!-- Decorative bottom-right element -->
                    <img src="../assets/images/about-paint.png" alt="Decoration"
                    class="absolute bottom-0 right-0 w-40 md:w-56 opacity-90 pointer-events-none" />

                    <!-- Optional background pattern -->
                    <div class="absolute inset-0 bg-[url('/images/about-pattern.png')] bg-no-repeat md:bg-left-top pointer-events-none"
                    style="background-size: 50% auto;"></div>
                </section>

                <div class="text-left md:w-[70%] mt-[30px] mb-[30px] md:mt-[50px] md:mb-[50px]">
                    <p class="font-covered_by_your_grace font-light text-[22px] md:text-[58px]">Make digital currency simple, fun, and rewarding.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F0F1F4] p-4 md:p-6 font-instrument rounded-2xl">
                    <!-- Mission -->
                    <div class="bg-[#FCFCFC] p-4 rounded-2xl flex flex-col">
                        <div>
                        <p class="font-bold text-[22px] text-[#022629DB]">Our Mission</p>
                        <p class="font-light text-[18px] text-[#4A4A4A]">
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
                        <p class="font-bold text-[22px] text-[#022629DB]">Our Vision</p>
                        <p class="font-light text-[18px] text-[#4A4A4A]">
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
