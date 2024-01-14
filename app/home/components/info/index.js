'use client'

import { useRef } from 'react'
import { CustomImage } from 'components'
import {
  CustomGridWrapper,
  ImageWrapper,
  InfoWrapper,
  ParagraphWrapper,
  ParallaxImageWrapper,
  TitleLine,
} from './styles'
import { Container, DisplayText, NormalText } from 'styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const Info = () => {
  const infoTarget = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: infoTarget.current,
          scrub: 3,
          start: 'top bottom',
        },
      })
      tl.to('#animate-number', { scale: 1.5, rotate: 10 }, 0)
    })

    return () => ctx.revert()
  }, [])

  return (
    <InfoWrapper ref={infoTarget}>
      <ImageWrapper>
        <CustomImage src={'/images/view.webp'} alt={'The view'} />
      </ImageWrapper>
      <Container>
        <CustomGridWrapper>
          <ParallaxImageWrapper>
            <CustomImage
              src={'/images/instruction.webp'}
              alt={'Instruction'}
              objectPosition={'bottom center'}
              scale={1.6}
            />
          </ParallaxImageWrapper>
          <TitleLine>
            <DisplayText>Instruction</DisplayText>
          </TitleLine>
          <ParagraphWrapper>
            <NormalText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </NormalText>
          </ParagraphWrapper>
        </CustomGridWrapper>
        <CustomGridWrapper bottom>
          <ParallaxImageWrapper bottom>
            <CustomImage
              src={'/images/management.webp'}
              alt={'Management'}
              objectPosition={'30% center'}
              scale={1.6}
            />
          </ParallaxImageWrapper>
          <TitleLine bottom>
            <DisplayText>Management</DisplayText>
          </TitleLine>
          <ParagraphWrapper bottom>
            <NormalText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </NormalText>
          </ParagraphWrapper>
        </CustomGridWrapper>
      </Container>
    </InfoWrapper>
  )
}

export default Info
