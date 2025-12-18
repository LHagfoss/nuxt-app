<template>
    <main class="bg-neutral-100 min-h-screen w-full overflow-x-hidden">
        <div class="w-full h-full">
            <AppNavbar />

            <main class="p-4 pt-24">
                <slot />
            </main>

            <Footer />
        </div>
    </main>
</template>