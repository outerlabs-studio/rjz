'use client'

import { useEffect, useRef, useState } from 'react'
import { Container, GridWrapper, HugeText, NormalText } from 'styles'
import {
  ArrowWrapper,
  ContentWrapper,
  ExpandSpan,
  FAQWrapper,
  Question,
  QuestionsWrapper,
  TextWrapper,
  TitleWrapper,
} from './styles'
import { CustomLink } from 'components'
import { useIsomorphicLayoutEffect } from 'react-use'
import { useLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const FAQItem = ({ details, expanded, setExpanded }) => {
  const lineOne = useRef()
  const lineTwo = useRef()
  const contentRef = useRef()
  const [hovered, setHovered] = useState(false)
  const lenis = useLenis()
  const isOpen = details.id === expanded

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.set(lineOne.current, { rotate: 45, translateX: '0.5vw' })
        .set(lineTwo.current, {
          rotate: -45,
        })
        .set(contentRef.current, { height: 0 })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (lenis) lenis.resize()

    if (isOpen) {
      gsap.to(lineOne.current, {
        rotate: 0,
        duration: 0.75,
        ease: 'power4.inOut',
      })
      gsap.to(lineTwo.current, {
        rotate: 0,
        duration: 0.75,
        ease: 'power4.inOut',
      })
      gsap.to(contentRef.current, {
        height: 'auto',
        marginBottom: '2vw',
        duration: 0.75,
        ease: 'power4.inOut',
        onComplete: () => ScrollTrigger.refresh(),
      })
    } else {
      gsap.to(lineOne.current, {
        rotate: 45,
        duration: 0.75,
        ease: 'power4.inOut',
      })
      gsap.to(lineTwo.current, {
        rotate: -45,
        duration: 0.75,
        ease: 'power4.inOut',
      })
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.75,
        marginBottom: 0,
        ease: 'power4.inOut',
        onComplete: () => ScrollTrigger.refresh(),
      })
    }
  }, [isOpen, lenis])

  return (
    <Question
      onClick={() => setExpanded(isOpen ? false : details.id)}
      onHoverStart={() => setHovered(!hovered)}
      onHoverEnd={() => setHovered(!hovered)}
    >
      <TitleWrapper $active={isOpen}>
        <NormalText>{details.title}</NormalText>
        <ArrowWrapper>
          <ExpandSpan ref={lineOne} />
          <ExpandSpan ref={lineTwo} />
        </ArrowWrapper>
      </TitleWrapper>
      <ContentWrapper ref={contentRef}>
        <NormalText>{details.description}</NormalText>
      </ContentWrapper>
    </Question>
  )
}

const accordionQuestions = [
  {
    id: 0,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
]

const FAQ = () => {
  const [expanded, setExpanded] = useState(0)

  return (
    <FAQWrapper>
      <Container>
        <GridWrapper>
          <TextWrapper>
            <HugeText>Answers to questions you may have</HugeText>
            <NormalText>
              Can’t find what you’re looking for?
              <br />
              Reach out here:
            </NormalText>
            <CustomLink href="hello@rjzconstructionsafety.com">
              hello@rjzconstructionsafety.com
            </CustomLink>
          </TextWrapper>
          <QuestionsWrapper>
            {accordionQuestions.map((details, index) => (
              <FAQItem
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </QuestionsWrapper>
        </GridWrapper>
      </Container>
    </FAQWrapper>
  )
}

export default FAQ
