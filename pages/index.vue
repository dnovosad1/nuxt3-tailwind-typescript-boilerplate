<template>
  <div class="h-screen w-screen flex items-center justify-center flex-col gap-5">
    <h1>Nuxt tailwind starter</h1>
    <nuxt-img src="/img.jpg" class="max-w-sm" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string
  disabled: boolean
}>();
</script>
