<script setup>
const { fetchRepos } = useGithub()
const { data: posts, status } = await fetchRepos()
</script>

<template>
  <div class="">
    <h1>My Nuxt GitHub Blog</h1>

    <div v-if="status === 'pending'">Loading...</div>
    
    <div v-else class="grid grid-cols-2 gap-4">
      <NuxtLink 
        v-for="post in posts" 
        :key="post.id" 
        :to="`/projects/${post.name}`"
        class=""
      >
        <h2>{{ post.name }}</h2>
        <p>{{ post.description }}</p>
        <span>{{ new Date(post.updated_at).toLocaleDateString() }}</span>
      </NuxtLink>
    </div>
  </div>
</template>