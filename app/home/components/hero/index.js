'use client'

import { useRef } from 'react'
import { CustomButton, CustomImage } from 'components'
import { useIsomorphicLayoutEffect } from 'react-use'
import { Container, DisplayText, NormalText } from 'styles'
import {
  BackgroundImage,
  ContentWrapper,
  DescriptionWrapper,
  ForeGroundImage,
  HeroWrapper,
  LineWrapper,
  TextWrapper,
} from './styles'
import gsap from 'gsap'

const Hero = () => {
  const descriptionText = `We provide highly tailored and expert-led safety management services, backed by 20 years of experience.`
  const titleTarget = useRef([])
  const descriptionTarget = useRef([])

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.from(
        titleTarget.current,
        {
          yPercent: 100,
          ease: 'power4.out',
          duration: 1,
          stagger: 0.1,
        },
        0,
      ).from(
        descriptionTarget.current,
        {
          yPercent: 100,
          ease: 'power4.out',
          duration: 1,
          stagger: 0.02,
        },
        0,
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <HeroWrapper>
      <Container style={{ height: 'inherit' }}>
        <ContentWrapper>
          <TextWrapper>
            <LineWrapper>
              <DisplayText>
                <span className="overflow">
                  <span ref={(el) => titleTarget.current.push(el)}>
                    Building
                  </span>
                </span>
              </DisplayText>
              <DisplayText>
                <span className="overflow">
                  <span ref={(el) => titleTarget.current.push(el)}>
                    America
                  </span>
                </span>
              </DisplayText>
            </LineWrapper>
            <LineWrapper>
              <DisplayText>
                <span className="overflow">
                  <span ref={(el) => titleTarget.current.push(el)}>safe</span>
                </span>
              </DisplayText>
              <DisplayText>
                <span className="overflow">
                  <span ref={(el) => titleTarget.current.push(el)}>again</span>
                </span>
              </DisplayText>
            </LineWrapper>
          </TextWrapper>
          <LineWrapper bottom>
            <DescriptionWrapper>
              <NormalText>
                {descriptionText.split(' ').map((word, index) => (
                  <span className="overflow">
                    <span
                      key={index}
                      ref={(el) => descriptionTarget.current.push(el)}
                    >
                      {word}&nbsp;
                    </span>
                  </span>
                ))}
              </NormalText>
              <CustomButton href="/about">Explore our services</CustomButton>
            </DescriptionWrapper>
            <NormalText className="scroll-text">Scroll to explore</NormalText>
          </LineWrapper>
        </ContentWrapper>
        <ForeGroundImage>
          <CustomImage
            scale={1.75}
            speed={3}
            src={'/images/excavator.webp'}
            objectPosition={'center 70%'}
            // priority={true}
          />
        </ForeGroundImage>
        <BackgroundImage>
          <CustomImage
            scale={1.75}
            speed={3}
            src={'/images/hero.webp'}
            alt={'RJZ Construction Safety'}
            objectPosition={'center 70%'}
            // priority={true}
          />
        </BackgroundImage>
      </Container>
    </HeroWrapper>
  )
}

export default Hero
