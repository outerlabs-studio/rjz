// import { Analytics } from '@vercel/analytics/react'
import { StyledComponentsRegistry } from 'lib'
import { font } from 'styles'

const title =
  'RJZ Construction Safety | New York Construction Safety Management'
const description = `A New York City Construction site safety management company offering on-site, professional safety management staffing and complete and customized plan development`

export const metadata = {
  title: {
    template: '%s | RJZ Construction Safety',
    default: title,
  },
  description: description,
  keywords: [
    'RJZ Construction Safety',
    'NYC sonstruction safety',
    'New York Contruction Safety',
    'construction safety',
    'construction safety management',
    'professional construction safety management',
    'construction safety staffing',
    'construction safety planning',
  ],
  openGraph: {
    title: title,
    description: description,
    url: 'https://www.rjzconstructionsafety.com',
    locale: 'en_US',
    type: 'website',
    images: {
      url: `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://www.rjzconstructionsafety.com'
      }/og-image.jpg`,
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@kyryloren',
    images: [
      `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://www.rjzconstructionsafety.com'
      }/og-image.jpg`,
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/lrk0fqe.css" />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US" />

        {/* START FAVICON */}
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned.tab.svg"
          color="#141714"
        />
        <meta name="msapplication-TileColor" content="#141714" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" href="/favicon/favicon.ico" />

        {/* END FAVICON */}
      </head>
      <body suppressHydrationWarning className={font.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        {/* <Analytics /> */}
      </body>
      {/* {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            async
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
          />
          <Script
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');`,
            }}
          />
        </>
      )} */}
    </html>
  )
}
