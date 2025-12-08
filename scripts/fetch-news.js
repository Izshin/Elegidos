import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APIFY_TOKEN = process.env.APIFY_TOKEN; // Token must be provided via environment variable
const ACTOR_ID = 'apify~facebook-posts-scraper';

async function downloadImage(url, filepath) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(filepath, buffer);
        return true;
    } catch (error) {
        console.error(`Error downloading image ${url}:`, error);
        return false;
    }
}

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

        // Ensure images directory exists
        const imagesDir = path.join(__dirname, '../public/news-images');
        if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir, { recursive: true });
        }

        const processedData = await Promise.all(data.map(async (post, index) => {
            const date = new Date(post.timestamp * 1000);
            const formattedDate = date.toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }).toUpperCase();

            const title = post.text ? post.text.split('\n')[0].substring(0, 50) + (post.text.length > 50 ? '...' : '') : 'Publicación de Facebook';
            const excerpt = post.text ? post.text.substring(0, 100) + (post.text.length > 100 ? '...' : '') : 'Ver publicación en Facebook...';

            let imageUrl = post.imageUrl || post.thumbnailUrl || post.mediaUrl || post.thumb;

            // Check for media array (common in Apify Facebook scraper for videos/albums)
            if (!imageUrl && post.media && Array.isArray(post.media) && post.media.length > 0) {
                const mediaItem = post.media[0];
                imageUrl = mediaItem.photo_image?.uri ||
                    mediaItem.thumbnailImage?.uri ||
                    mediaItem.thumbnail ||
                    mediaItem.image?.uri ||
                    mediaItem.preferred_thumbnail?.image?.uri;
            }

            let localImagePath = null;
            if (imageUrl) {
                const imageName = `post-${index + 1}.jpg`;
                const imagePath = path.join(imagesDir, imageName);
                const success = await downloadImage(imageUrl, imagePath);
                if (success) {
                    localImagePath = `/Elegidos/news-images/${imageName}`;
                } else {
                    // Fallback to original URL if download fails (though it might be broken)
                    localImagePath = imageUrl;
                }
            }

            return {
                id: index + 1,
                title: title,
                date: formattedDate,
                excerpt: excerpt,
                category: 'Facebook',
                link: post.url || post.postUrl || '#',
                image: localImagePath,
            };
        }));

        const outputPath = path.join(__dirname, '../public/news.json');
        fs.writeFileSync(outputPath, JSON.stringify(processedData, null, 2));
        console.log(`Successfully saved ${processedData.length} posts to ${outputPath}`);

    } catch (error) {
        console.error('Failed to fetch news:', error);
        process.exit(1);
    }
}

fetchNews();
