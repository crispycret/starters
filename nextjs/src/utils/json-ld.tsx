


export const loadGlobalJsonLd = () => {

    let globalJsonLd;

    try {
        globalJsonLd = require('@/assets/data/global-json-ld.json');
    } catch (error) {
        console.warn('Error loading global JSON-LD file used for SEO: @/assets/data/global-json-ld.json. Falling back to the example JSON-LD data.', error);
        globalJsonLd = examples.global; // Use the example JSON-LD data as a fallback
    }
    return globalJsonLd
}


export const examples = {
    global: {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "My Organization",
        "description": "We provide solutions for your needs.",
        "url": "https://www.example.com",
        "logo": "https://www.example.com/logo.png",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-123-456-7890",
            "contactType": "customer support"
          }
        ],
        "author": {
          "@type": "Person",
          "name": "Your Name",
        },
    },
    review: (seoScore: number) => { 
        return {
            "@context": "https://schema.org/",
            "@type": "Review",
            "itemReviewed": {
            "@type": "Thing",
            "name": "Your Website or Page Name",
            },
            "reviewRating": {
            "@type": "Rating",
            "ratingValue": seoScore,
            },
            "author": {
            "@type": "Person",
            "name": "Your Name",
            },
        }
    }
}


export default {
    global: loadGlobalJsonLd(),
    examples
}