'use client'

import { ThemeProvider } from 'styled-components'
import { Tempus } from 'lib'
import { CTA, Footer, Scrollbar } from 'components'
import { useIsTouchDevice } from 'hooks'
import { Lenis } from '@studio-freight/react-lenis'
import { GlobalStyle, normalTheme } from 'styles'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.defaults({ ease: 'none' })
  gsap.registerPlugin(ScrollTrigger)
  // ScrollTrigger.defaults({ markers: true }) //process.env.NODE_ENV === 'development' })

  // merge rafs
  gsap.ticker.lagSmoothing(0)
  gsap.ticker.remove(gsap.updateRoot)
  Tempus?.add((time) => {
    gsap.updateRoot(time / 1000)
  }, 0)

  // reset scroll position
  window.scrollTo(0, 0)
  window.history.scrollRestoration = 'manual'

  console.log('👋 Hello! 👀')
}

export default function Template({ children }) {
  const touchDevice = useIsTouchDevice()

  return (
    <Lenis root>
      <ThemeProvider theme={normalTheme}>
        <GlobalStyle />
        {touchDevice ? null : <Scrollbar />}
        <main>{children}</main>
        <CTA />
        <Footer />
      </ThemeProvider>
    </Lenis>
  )
}
