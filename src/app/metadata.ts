export const defaultMetadata = {
  title: {
    default: 'Crow Business - Transform Your Service Business',
    template: '%s | Crow Business'
  },
  description: 'Streamline your service business with our all-in-one booking and management platform. Automate scheduling, accept payments, and grow your business.',
  keywords: ['booking system', 'business management', 'scheduling software', 'payment processing', 'service business'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crowbusiness.com',
    siteName: 'Crow Business',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Crow Business Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@crowbusiness',
    creator: '@crowbusiness'
  },
  robots: {
    index: true,
    follow: true
  }
}