<template>
    <section class="relative bg-white mb:pb-[160px] px-6 md:px-10 font-instrument overflow-hidden h-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <!-- Left side: stacked images -->
            <!-- <div class="flex flex-col space-y-4 relative">
                <div class="flex space-x-4 relative z-1 absolute -bottom-[20px] left-0">
                <img src="../assets/images/about-img1.jpg" alt="User" class="shadow-md transform rotate-[12.69deg] w-1/2 h-1/2 overflow-hidden" />
                <img src="../assets/images/about-img2.jpg" alt="User" class="shadow-md w-1/2 h-1/2 transform rotate-[12.69deg] overflow-hidden" />
                </div>
                <img src="../assets/images/about-img3.jpg" alt="User" class="shadow-md w-full z-10" />
            </div> -->

            <div class="flex flex-col space-y-4 relative">
                <div class="flex space-x-4 relative z-10 absolute -bottom-[20px] left-0">
                    <img 
                    src="../assets/images/about-img1.jpg" 
                    alt="User" 
                    class="shadow-md transform rotate-[12.69deg] w-1/2 h-1/4 overflow-hidden"
                    style="clip-path: polygon(0 15%, 100% 0, 100% 85%, 30% 85%);" 
                    />
                    <img 
                    src="../assets/images/about-img2.jpg" 
                    alt="User" 
                    class="shadow-md transform rotate-[12.69deg] w-1/2 h-1/2 overflow-hidden"
                    style="clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);" 
                    />
                </div>

                <img 
                    src="../assets/images/about-img3.jpg" 
                    alt="User" 
                    class="shadow-md w-full z-10" 
                />
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
                    <span class="text-[20px] md:text-[24px]">First-time crypto users</span>
                    </li>

                    <!-- Item 2 -->
                    <li class="flex items-center space-x-3 relative">
                    <img src="../assets/images/about-tick.png" alt="" class="rounded-full border-2 p-2">
                    <span class="absolute top-14 left-3 w-px h-6 border-l-2 border-dotted border-gray-400"></span>
                    <span class="text-[20px] md:text-[24px]">Casual investors</span>
                    </li>

                    <!-- Item 3 -->
                    <li class="flex items-center space-x-3 relative">
                    <img src="../assets/images/about-tick.png" alt="" class="rounded-full border-2 p-2">
                    <span class="absolute top-14 left-3 w-px h-6 border-l-2 border-dotted border-gray-400"></span>
                    <span class="text-[20px] md:text-[24px]">Crypto-curious students and young professionals</span>
                    </li>

                    <!-- Item 4 (last one, no dotted line) -->
                    <li class="flex items-center space-x-3 relative">
                    <img src="../assets/images/about-tick.png" alt="" class="rounded-full border-2 p-2">
                    <span class="text-[20px] md:text-[24px]">Globally connected users</span>
                    </li>
                </ul>
            </div>

        </div>

        <!-- Decorative bottom-right element -->
        <img src="../assets/images/about-paint.png" alt="Decoration"
        class="absolute bottom-0 right-0 w-40 md:w-56 opacity-90 pointer-events-none" />

        <!-- Optional background pattern -->
        <div class="absolute inset-0 bg-[url('/images/about-pattern.png')] bg-no-repeat md:bg-left-top pointer-events-none"
        style="background-size: 50% auto;">
        </div>

    </section>
</template>