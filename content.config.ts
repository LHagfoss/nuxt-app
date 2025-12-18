import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'content',
            source: 'blog',
            schema: z.object({
                title: z
                    .string(),

                description: z
                    .string()
                    .min(1),

                tags: z
                    .array(z.string())
                    .min(1),

                image: z
                    .string(),

                date: z
                    .date(),
            })
        })
    }
});