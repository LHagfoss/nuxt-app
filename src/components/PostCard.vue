<template>
  <article class="flex flex-col items-start mb-1">
    <NuxtImg :src="props.image" class="w-full object-cover aspect-square" />

    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
    <p>{{ props.date }}</p>

    <NuxtLink :to="props.path" class="pointer-down">Read more</NuxtLink>
  </article>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String
  },
  date: {
    type: String,
  },
  path: {
    type: String,
  }
});
</script>