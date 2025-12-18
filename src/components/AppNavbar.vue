<template>
  <header
    class="flex gap-2 rounded-lg transition-all duration-300 fixed left-1/2 -translate-x-1/2 justify-between"
    :class="{
      'bg-neutral-100 p-0 w-[calc(100%-2rem)] top-4': !hasScrolled,
      'bg-neutral-200/50 backdrop-blur-xl p-1 w-[calc(100%-4rem)] top-4 md:top-8': hasScrolled,
    }">
    <div class="flex-1">
      <NuxtLink to="/" class="aspect-square h-12 bg-neutral-800 rounded-md grid place-items-center">
        <p class="text-neutral-50 text-xl">L</p>
      </NuxtLink>
    </div>

    <nav class="flex-2 justify-center flex items-center gap-1">
      <NuxtLink to="/" class="px-3 py-2 uppercase text-neutral-700 hover:text-neutral-800">
        {{ $t('navbar.home') }}
      </NuxtLink>

      <NuxtLink to="/blog" class="px-3 py-2 uppercase text-neutral-700 hover:text-neutral-800">
        {{ $t('navbar.blog') }}
      </NuxtLink>

      <NuxtLink to="/projects"
        class="px-3 py-2  font-bold text-neutral-700 hover:text-neutral-800">
        {{ $t('navbar.projects') }}
      </NuxtLink>

      <NuxtLink to="/about" class="px-3 py-2 font-bold text-neutral-700 hover:text-neutral-800">
        {{ $t('navbar.about_me') }}
      </NuxtLink>
    </nav>

    <div class="flex-1 flex justify-end items-center gap-1">
      <LanguageSwitcher />

      <button v-on:click="router.push('/contact')" type="button"
        class="h-12 bg-neutral-800 rounded-md p-1 pl-4 gap-4 flex items-center">
        <p class="text-neutral-50">{{ $t('navbar.contact') }}</p>
        <div class="h-full aspect-square bg-neutral-50 rounded-sm grid place-items-center">
          <Icon name="uil:arrow-up-right" style="color: #262626" size="28" />
        </div>
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const router = useRouter();
const hasScrolled = ref(false);

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
});

</script>