import localFont from 'next/font/local'

const font = localFont({
  adjustFontFallback: 'Arial',
  variable: '--font-text',
  preload: true,
  fallback: [
    'San Francisco',
    'SF Pro Text',
    '-apple-system',
    'system-ui',
    'sans-serif',
  ],
  src: [
    {
      path: '../public/font/NeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/NeueMontreal-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/font/NeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/NeueMontreal-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/font/NeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/font/NeueMontreal-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default font
