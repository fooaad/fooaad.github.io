import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { profile } from '../data/site';
import { getPosts } from '../lib';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${profile.name}'s writing`,
    description: profile.tagline,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/writing/${post.id}/`,
    })),
  });
}
