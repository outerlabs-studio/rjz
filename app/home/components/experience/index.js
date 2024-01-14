'use client'

import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { HugeText } from 'styles'
import { ExperienceWrapper, NumberWrapper } from './styles'
import gsap from 'gsap'

const Experience = () => {
  const subtitleRef = useRef()
  const sectionTarget = useRef()
  const animLocalNumber = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          scrub: 3,
          start: 'top top',
          end: '+=3000',
          pin: true,
        },
      })

      tl.to(animLocalNumber.current, { scale: 6, rotate: 60 }, 0).to(
        subtitleRef.current,
        { yPercent: 900, scale: 0 },
        0,
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <ExperienceWrapper ref={sectionTarget}>
      <div id="animate-number">
        <NumberWrapper ref={animLocalNumber}>20</NumberWrapper>
      </div>
      <HugeText ref={subtitleRef}>years of experience</HugeText>
    </ExperienceWrapper>
  )
}

export default Experience
