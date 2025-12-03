import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APIFY_TOKEN = process.env.APIFY_TOKEN; // Token must be provided via environment variable
const ACTOR_ID = 'apify~facebook-posts-scraper';

async function fetchNews() {
    try {
        console.log('Fetching news from Apify...');
        const response = await fetch(`https://api.apify.com/v2/acts/${ACTOR_ID}/run-sync-get-dataset-items?token=${APIFY_TOKEN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                startUrls: [{ url: 'https://www.facebook.com/orquesta.elegidos/?locale=es_ES' }],
                resultsLimit: 6,
            }),
        });

        if (!response.ok) {
            throw new Error(`Error fetching posts: ${response.statusText}`);
        }

        const data = await response.json();

        // Process data to match the frontend structure immediately (optional, but good for consistency)
        // For now, we'll save the raw Apify data or a slightly processed version. 
        // Let's save the raw data to keep the frontend logic we just wrote working without changes, 
        // OR we can move the mapping logic here. 
        // Moving mapping logic here is cleaner for the frontend.

        const processedData = data.map((post, index) => {
            const date = new Date(post.timestamp * 1000);
            const formattedDate = date.toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }).toUpperCase();

            const title = post.text ? post.text.split('\n')[0].substring(0, 50) + (post.text.length > 50 ? '...' : '') : 'Publicación de Facebook';
            const excerpt = post.text ? post.text.substring(0, 100) + (post.text.length > 100 ? '...' : '') : 'Ver publicación en Facebook...';

            let image = post.imageUrl || post.thumbnailUrl || post.mediaUrl || post.thumb;

            // Check for media array (common in Apify Facebook scraper for videos/albums)
            if (!image && post.media && Array.isArray(post.media) && post.media.length > 0) {
                const mediaItem = post.media[0];
                image = mediaItem.photo_image?.uri ||
                    mediaItem.thumbnailImage?.uri ||
                    mediaItem.thumbnail ||
                    mediaItem.image?.uri ||
                    mediaItem.preferred_thumbnail?.image?.uri;
            }

            return {
                id: index + 1,
                title: title,
                date: formattedDate,
                excerpt: excerpt,
                category: 'Facebook',
                link: post.url || post.postUrl || '#',
                image: image,
            };
        });

        const outputPath = path.join(__dirname, '../public/news.json');
        fs.writeFileSync(outputPath, JSON.stringify(processedData, null, 2));
        console.log(`Successfully saved ${processedData.length} posts to ${outputPath}`);

    } catch (error) {
        console.error('Failed to fetch news:', error);
        process.exit(1);
    }
}

fetchNews();
