// src/pages/search.json.js
import { getCollection } from 'astro:content';

export async function GET({}) {
	const bryanPosts = await getCollection('blog');
	const bryanBody = JSON.stringify(
		bryanPosts.map((bryanPost) => ({
			title: bryanPost.data.title,
			description: bryanPost.data.description,
			slug: bryanPost.slug,
            tags: bryanPost.data.tags
		}))
	);
	return new Response(bryanBody, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
