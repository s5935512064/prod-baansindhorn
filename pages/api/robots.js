import { MetadataRoute } from 'next'

export default function robots() {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                disallow: '/nogooglebot/',
            },
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://baansindhorn.com/sitemap.xml',
    }
}