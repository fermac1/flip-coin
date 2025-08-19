<template>
    <div class="min-h-screen bg-[#ffffff] text-white px-6 md:px-20 pt-10 pb-0 relative">
        <TopNavBar class="bg-[#f3f3f3]"/>
        <div class="absolute inset-0 top-[150px] bg-cover bg-no-repeat bg-left-top bg-[url(/images/bg-faq.png)]"
            style="background-size: cover;">
        </div>
    
            <div class="mt-[50px] md:mt-[120px] mb-[50px]">
                <div class="text-center text-[#161616] w-[350px] md:w-[700px] mx-auto">
                    <p class="font-craftwork font-extrabold text-[32px] md:text-[64px]">FAQs</p>
                    <p class="font-instrument text-[16px] md:text-[20px] font-light">Flipcoin is a gamified, beginner-friendly crypto platform.</p> 
                    <p class="font-instrument text-[16px] md:text-[20px] font-light">It's secure, transparent, and perfect for quick, low-stakes trading.</p>
                </div>
                <div class="bg-[#E6E6E621] min-h-screen p-8 md:w-[900px] md:mx-auto rounded-[24px] border-none">
                    <FaqAccordion/>
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
