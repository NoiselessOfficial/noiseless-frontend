<script setup lang="ts">
import { Title } from '@/components/ui/index'
</script>

<template>
  <div class="relative mt-20 px-6 sm:mt-32 sm:px-10 lg:mt-50 lg:px-0">

    <!-- Conteúdo -->
    <div class="relative z-10 flex w-[90%] lg:max-w-150 flex-col mx-10 lg:ml-25 xl:ml-40">

      <Title variant="v1" class="mb-8 text-left">
        What is Misophonia?
      </Title>

      <p class="text-white text-left">
        Misophonia is a condition where certain everyday sounds, such as
        chewing, breathing, coughing, or repetitive noises, can trigger intense
        discomfort, irritation, or anxiety. These reactions can make everyday
        activities like watching movies or using a computer difficult.
      </p>

      <Title variant="v1" class="mt-16 mb-8 text-left">
        What Will We Do to Help?
      </Title>

      <p class="text-white text-left">
        We are developing a computer tool that analyzes audio in real time and
        detects sounds selected by the user. When a trigger is identified, the
        system reduces its volume while keeping the rest of the audio intact,
        creating a more comfortable listening experience.
      </p>

    </div>

    <!-- Vídeo -->
    <video
      src="/video.webm"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="pointer-events-none absolute hidden lg:block
             right-5 top-1/2 w-100 -translate-y-1/2
             xl:right-20 xl:w-140"
    ></video>

  </div>
</template>
