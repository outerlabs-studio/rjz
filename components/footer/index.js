'use client'

import { useRef } from 'react'
import Marquee from 'components/marquee'
import {
  TopGridWrapper,
  FooterWarpper,
  LinkWrapper,
  LogoWrapper,
  FooterLayout,
  MiddleGridWrapper,
  DescriptionWrap,
  ButtonWrap,
  BottomFooterWrapper,
  Columns,
  LinksWrapper,
  ColTitle,
} from './styles'
import {
  Container,
  DisplayText,
  GridWrapper,
  NormalText,
  normalTheme,
} from 'styles'
import Image from 'next/image'
import CustomLink from 'components/link'
import CustomButton from 'components/button'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const Footer = () => {
  const footerTarget = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(footerTarget.current, {
        yPercent: -100,
        scrollTrigger: {
          trigger: footerTarget.current,
          start: 'top bottom',
          end: 'bottom+=100% bottom',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <FooterWarpper ref={footerTarget}>
      <FooterLayout>
        <Marquee repeat={3}>
          <DisplayText>Talk to us</DisplayText>
        </Marquee>
        <Container>
          <TopGridWrapper>
            <LogoWrapper>
              <Image src={'/logo.webp'} alt="RJZ Construction Safety" fill />
            </LogoWrapper>
            <LinkWrapper>
              <CustomLink href={'tel:13476630877'}>
                +1 (347) 663-0877
              </CustomLink>
            </LinkWrapper>
            <LinkWrapper bottom>
              <CustomLink href={'mailto:hello@rjzconstructionsafety.com'}>
                hello@rjzconstructionsafety.com
              </CustomLink>
            </LinkWrapper>
          </TopGridWrapper>
        </Container>
        <Container>
          <MiddleGridWrapper>
            <DescriptionWrap>
              <NormalText>
                We provide highly tailored and expert-led safety management
                services, backed by 20 years of experience.
              </NormalText>
              <ButtonWrap>
                <CustomButton
                  $textColor={normalTheme.white}
                  $bgColor={normalTheme.darkGray}
                >
                  Let's talk
                </CustomButton>
              </ButtonWrap>
            </DescriptionWrap>
            <Columns>
              <LinksWrapper>
                <ColTitle>Navigation</ColTitle>
                <CustomLink>About</CustomLink>
                <CustomLink>Services</CustomLink>
                <CustomLink>FAQ</CustomLink>
                <CustomLink>Contact</CustomLink>
              </LinksWrapper>
              <LinksWrapper>
                <ColTitle>Socials</ColTitle>
                <CustomLink>Instagram</CustomLink>
                <CustomLink>FaceBook</CustomLink>
                <CustomLink>LinkedIn</CustomLink>
              </LinksWrapper>
              <LinksWrapper>
                <ColTitle>Address</ColTitle>
                <NormalText>
                  3000 Ocean Parkway
                  <br />
                  Brooklyn, NY 11230
                </NormalText>
              </LinksWrapper>
            </Columns>
          </MiddleGridWrapper>
        </Container>
        <Container>
          <BottomFooterWrapper>
            <NormalText>&copy; 2024 RJZ Construction Safety</NormalText>
            <NormalText>Crafted by Outer Labs Studio</NormalText>
          </BottomFooterWrapper>
        </Container>
      </FooterLayout>
    </FooterWarpper>
  )
}

export default Footer
