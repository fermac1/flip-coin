<template>
    <footer class="bg-[#022629] text-[#ffffff] py-12 px-6 md:px-20">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-20">
            <!-- Logo -->
            <div class="flex-shrink-0 w-[20%]">
                <!-- <img class="md:w-[30%]" src="~/assets/images/flipcoin_logo.png" alt="flip coin logo" /> -->
                 <p class="font-covered_by_your_grace font-normal text-[22px] text-[#ffffff]">Flipcoin</p>
            </div>

            <!-- Navigation Sections -->
            <div class="flex flex-grow justify-between gap-10">
            <!-- Column 1 -->
            <div class="space-y-2">
                <p class="font-bold text-[16px]"><NuxtLink to="/">Home</NuxtLink></p>
                <p class="text-[14px] font-light"><NuxtLink to="#how-it-works">How it works</NuxtLink></p>
                <p class="text-[14px] font-light">Testimonials</p>
            </div>

            <!-- Column 2 -->
            <div class="space-y-2">
                <p class="font-bold text-[16px]"><NuxtLink to="/about">About</NuxtLink></p>
                <p class="text-[14px] font-light"><NuxtLink to="#who-we-serve">Who we serve</NuxtLink></p>
            </div>

            <!-- Column 3 -->
            <div class="space-y-2">
                <p class="font-bold text-[16px]"><NuxtLink to="/faq">FAQs</NuxtLink></p>
            </div>

            <!-- Column 4: Socials -->
            <div class="space-y-2">
                <p class="font-bold mb-2 text-[16px]">Follow us on</p>
                <div class="flex gap-2 flex-wrap md:flex-nowrap">
                <NuxtLink to="#"><img src="~/assets/images/facebook.png" alt="facebook" /></NuxtLink>
                <NuxtLink to="#"><img src="~/assets/images/x.png" alt="x" /></NuxtLink>
                <NuxtLink to="#"><img src="~/assets/images/instagram.png" alt="instagram" /></NuxtLink>
                <NuxtLink to="#"><img src="~/assets/images/github.png" alt="github" /></NuxtLink>
                </div>
            </div>
            </div>
        </div>

        <!-- demarcation -->
        <!-- <div class="mt-10 mb-10 text-center space-y-10 bg-[#ffffff] h-[1px] width-[10px]">
        </div> -->

        <!-- Gradient Horizontal Line -->
        <div class="w-4/5 mx-auto h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-20 mb-12"></div>

        <!-- Footer description -->
        <div class="mt-10 mb-10 text-justify space-y-10">
            <p class="text-[14px] font-light">
            London's first restaurant focused on well-dressed salads. We serve vibrant,
            customizable bowls, warm soups, and citrus desserts—crafted with style,
            flavor, and freshness in every bite.
            </p>
        </div>
    </footer>

</template>