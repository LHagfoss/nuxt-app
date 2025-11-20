<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" type="button"
      class="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-300/50 hover:text-neutral-800 flex items-center gap-2 transition-colors"
      :class="{ 'bg-neutral-300/50': isOpen }">
      <Icon :name="getFlag(locale)" size="16" />
      <span class="uppercase">{{ locale }}</span>
      <Icon name="heroicons:chevron-down-20-solid" size="16" class="transition-transform duration-200 text-neutral-500"
        :class="{ 'rotate-180': isOpen }" />
    </button>

    <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 z-30" />

    <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <div v-if="isOpen"
        class="absolute right-0 z-40 mt-2 origin-top-right rounded-lg bg-neutral-200 p-1 flex flex-col gap-1">
        <button v-for="l in locales" :key="l.code" @click="selectLocale(l.code)"
          class="min-w-34 flex w-full justify-between items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-neutral-700 transition-colors"
          :class="[
            l.code === locale
              ? 'bg-neutral-50 text-neutral-900'
              : 'hover:bg-neutral-300/50 hover:text-neutral-800'
          ]">
          <Icon :name="getFlag(l.code)" size="16" />
          <p class="text-end">{{ l.name }}</p>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const { locales, setLocale, locale } = useI18n()
const isOpen = ref(false)

function getFlag(code: CodeType) {
  if (code === 'no') return 'cif:no'
  if (code === 'en') return 'cif:gb'
  return 'heroicons:globe-alt'
}

function selectLocale(code: CodeType) {
  setLocale(code)
  isOpen.value = false
}
</script>