'use client'

import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from 'react-use'
import { Normal } from 'styles'
import { usePathname, useRouter } from 'next/navigation'
// import { animatePageOut } from 'lib'

const StyledLink = styled.a`
  ${Normal}
  display: inline-flex;
  flex-direction: column;
  text-decoration: none;
  color: ${({ $color, theme }) =>
    $color ? `rgb(${theme.color})` : `rgb(${theme.blue})`};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: fit-content;
  pointer-events: all;
  width: fit-content;
`

const StyledSpan = styled.span`
  position: absolute;
`

const CustomLink = (props) => {
  const line1 = useRef(null)
  const line2 = useRef(null)
  const router = useRouter()
  const pathname = usePathname()
  const tl = useRef()
  const { href, to, target, children, $color, onClick, className, ...rest } =
    props

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .set(line2.current, { yPercent: 100 })
      .to(
        line1.current,
        { yPercent: -100, duration: 0.5, ease: 'power3.inOut' },
        0,
      )
      .to(
        line2.current,
        { yPercent: 0, duration: 0.5, ease: 'power3.inOut' },
        0,
      )
  }, [])

  const handleMouseEnter = useCallback(() => tl.current.play(), [tl])
  const handleMouseLeave = useCallback(() => tl.current.reverse(), [tl])

  const linkAttributes = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    $color,
    onClick,
    ...rest,
  }

  const handleClick = (e) => {
    e.preventDefault()
    // animatePageOut(href, router, pathname)
  }

  if (href) {
    return (
      <div className={className} onClick={handleClick}>
        <StyledLink
          href={href}
          role="link"
          target={target === '_blank' ? '_blank' : undefined}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          {...linkAttributes}
        >
          <div ref={line1}>{children}</div>
          <StyledSpan ref={line2}>{children}</StyledSpan>
        </StyledLink>
      </div>
    )
  }

  return (
    <StyledLink
      href={to}
      target={target === '_blank' ? '_blank' : undefined}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={className}
      {...linkAttributes}
    >
      <div ref={line1}>{children}</div>
      <StyledSpan ref={line2}>{children}</StyledSpan>
    </StyledLink>
  )
}

export default CustomLink
