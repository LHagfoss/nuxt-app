<script setup>
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "LHagfoss test Nuxt project"
    },
  ]
})
</script>

<template>
  <section class="py-24 mt-24">
    <div class="w-fit mx-auto text-center">
      <p class="text-neutral-800">{{ $t('home.hero.smallTitle') }}</p>

      <h1 class="text-[10rem] font-extrabold uppercase text-neutral-800 leading-none">{{ $t('home.hero.heroTitle') }}
      </h1>

      <div class="w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
          <NuxtImg src="/lucas.webp" class="rounded-full max-h-6" />
          <p class="text-neutral-800 uppercase font-extrabold">Lucas T. Hagfoss</p>
        </div>

        <p class="font-extrabold">2007</p>
      </div>
    </div>
  </section>

  <section class="w-full p-4 md:p-8">
    <div class="w-full bg-neutral-800 h-128 rounded-xl"></div>
  </section>
</template>