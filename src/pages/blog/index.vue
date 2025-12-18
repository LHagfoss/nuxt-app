<script lang="ts" setup>
const { data: blog } = await useAsyncData((() => queryCollection("blog").path("/").first()))
</script>

<template>
  <section class="flex flex-col gap-4">
    <div class="grid grid-cols-2 gap-1">
      <PostCard
        v-for="blogPost in blog"
        :description="blogPost.description"
        :image="blogPost.image"
        :date="blogPost.date"
        :path="blogPost.slug"
      />
    </div>
  </section>
</template>