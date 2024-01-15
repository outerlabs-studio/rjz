'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { MediumText, Z_INDEX } from 'styles'

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.transition};
`
export const CustomGridWrapper = styled.div`
  display: grid;
  position: relative;
  grid-gap: 0;
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  height: 100%;
  z-index: 1;
`
const LoaderBar = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `rgb(${theme.blue})`};
`
const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  color: ${({ theme }) => `rgb(${theme.white})`};

  .line1 {
    transform: translate(0, 100%);
  }
  .line2 {
    transform: translate(0, 200%);
  }
`

const Loader = ({ setShowLoader }) => {
  const line1 = `Building your experience...`
  const line2 = `Welcome`
  const line1Target = useRef([])
  const line2Target = useRef([])
  const barTarget = useRef([])

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()
      let easing = {
        ease: 'power4.inOut',
        duration: 1,
        stagger: 0.02,
      }

      tl.to(line1Target.current, {
        y: 0,
        ...easing,
      })
        .to(
          line1Target.current,
          {
            yPercent: -100,
            ...easing,
          },
          1.5,
        )
        .to(
          line2Target.current,
          {
            y: 0,
            ...easing,
          },
          1.75,
        )
        .to(
          line2Target.current,
          {
            yPercent: -100,
            ...easing,
          },
          2.75,
        )
        .to(
          barTarget.current,
          {
            height: 0,
            ease: 'power4.inOut',
            duration: 2,
            stagger: 0.05,
            onComplete: () => {
              setShowLoader(false)
            },
          },
          3,
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <LoaderWrapper>
      <TextWrapper>
        <MediumText>
          {line1.split('').map((word, index) => (
            <span className="overflow" key={index}>
              <span
                className="line1"
                ref={(el) => line1Target.current.push(el)}
              >
                {word === ' ' ? <>&nbsp;</> : word}
              </span>
            </span>
          ))}
        </MediumText>
      </TextWrapper>
      <TextWrapper>
        <MediumText>
          {line2.split('').map((word, index) => (
            <span className="overflow" key={index}>
              <span
                className="line2"
                ref={(el) => line2Target.current.push(el)}
              >
                {word === ' ' ? <>&nbsp;</> : word}
              </span>
            </span>
          ))}
        </MediumText>
      </TextWrapper>
      <CustomGridWrapper>
        <LoaderBar ref={(el) => barTarget.current.push(el)} />
        <LoaderBar ref={(el) => barTarget.current.push(el)} />
        <LoaderBar ref={(el) => barTarget.current.push(el)} />
        <LoaderBar ref={(el) => barTarget.current.push(el)} />
        <LoaderBar ref={(el) => barTarget.current.push(el)} />
        <LoaderBar ref={(el) => barTarget.current.push(el)} />
        <LoaderBar ref={(el) => barTarget.current.push(el)} />
        <LoaderBar ref={(el) => barTarget.current.push(el)} />
      </CustomGridWrapper>
    </LoaderWrapper>
  )
}

export default Loader
