<script lang="ts" setup>
import CardSuport from './cardSupport.vue'
import ItemCard from './itemCard.vue'
import { Light } from '../ui/index.ts';
import { socialMedias } from '@/constants/links.ts';
import { Linkedin, Instagram, MailIcon, Users } from 'lucide-vue-next';
</script>

<template>
  <div class="relative flex flex-col gap-15">
    <Light class="top-20 left-80"/>
    <CardSuport titulo="Social media">
      <ItemCard text="Noiseless" :icone="Linkedin" :to="socialMedias.linkedin"/>
      <ItemCard text="noiselessofficial@outlook.com" :icone="MailIcon" :to="socialMedias.email"/>
      <ItemCard text="projNoiseless" :icone="Instagram" :to="socialMedias.instagram"/>
    </CardSuport>
    <CardSuport titulo="Support">
      <ItemCard text="Suporte" :icone="Users" :to="socialMedias.github"/>
    </CardSuport>
  </div>
</template>
