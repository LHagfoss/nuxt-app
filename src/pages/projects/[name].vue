<script setup>
import MarkdownIt from 'markdown-it'

const route = useRoute()
const repoName = route.params.name
const { fetchReadme } = useGithub()

const { data: rawMarkdown } = await fetchReadme(repoName)

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
})

const renderedContent = computed(() => {
    if (!rawMarkdown.value) return ''
    return md.render(rawMarkdown.value)
})
</script>

<template>
    <div class="container">
        <NuxtLink to="/" class="back-link">← Back to posts</NuxtLink>

        <article class="prose">
            <h1 class="title">{{ repoName }}</h1>
            <div v-html="renderedContent"></div>
        </article>
    </div>
</template>