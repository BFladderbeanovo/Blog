
import { defineCollection, z } from 'astro:content';

const bryanBlog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		bryanTitle: z.string(),
		bryanDescription: z.string(),
		// Transform string to Date object
		bryanPubDate: z.coerce.date(),
		bryanUpdatedDate: z.coerce.date().optional(),
		bryanHeroImage: z.string().optional(),
		bryanTags: z.array(z.string()).optional(),
		bryanCategory: z.string().optional(),
	}),
});

export const bryanCollections = { bryanBlog };
