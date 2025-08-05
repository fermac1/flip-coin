<template>
    <div class="bg-[#022629] text-[#ffffff] py-6 px-20 ">
        <div class="flex items-start gap-20">
            <!-- Logo -->
            <div class="flex-shrink-0 w-[20%]">
                <img class="w-[30%]" src="~/assets/images/flipcoin_logo.png" alt="flip coin logo" />
            </div>

            <!-- Navigation Sections -->
            <div class="flex flex-grow justify-between gap-10">
            <!-- Column 1 -->
            <div class="space-y-2">
                <p class="font-bold"><NuxtLink to="/">Home</NuxtLink></p>
                <p class="text-[12px]"><NuxtLink to="#how-it-works">How it works</NuxtLink></p>
                <p class="text-[12px]">Testimonials</p>
            </div>

            <!-- Column 2 -->
            <div class="space-y-2">
                <p class="font-bold">About</p>
                <p class="text-[12px]">Who we serve</p>
            </div>

            <!-- Column 3 -->
            <div class="space-y-2">
                <p class="font-bold">FAQs</p>
            </div>

            <!-- Column 4: Socials -->
            <div class="space-y-2">
                <p class="font-bold mb-2">Follow us on</p>
                <div class="flex gap-2">
                <img src="~/assets/images/facebook.png" alt="facebook" />
                <img src="~/assets/images/x.png" alt="x" />
                <img src="~/assets/images/instagram.png" alt="instagram" />
                <img src="~/assets/images/github.png" alt="github" />
                </div>
            </div>
            </div>
        </div>

        <!-- demarcation -->
        <div class="mt-10 mb-10 text-center space-y-10 bg-[#ffffff] h-[1px] width-[10px]">
        </div>

        <!-- Footer description -->
        <div class="mt-10 mb-10 text-center space-y-10">
            <p class="text-[12px]">
            London's first restaurant focused on well-dressed salads. We serve vibrant,
            customizable bowls, warm soups, and citrus desserts—crafted with style,
            flavor, and freshness in every bite.
            </p>
        </div>
    </div>

</template>