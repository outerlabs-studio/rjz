'use client'

import { useEffect, useRef } from 'react'
import { useRect } from 'hooks'
import { useLenis } from '@studio-freight/react-lenis'
import styled from 'styled-components'
import { Z_INDEX } from 'styles'

const ScrollbarWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: ${Z_INDEX.scrollbar};

  .inner {
    height: 100%;
    position: relative;
  }

  .thumb {
    min-height: 80px;
    width: 8px;
    background-color: ${({ theme }) => `rgb(${theme.black})`};
    position: absolute;
    right: 0;
    border-radius: 10px;
    cursor: grab;
  }

  @include mobile {
    display: none;
  }
`

function mapRange(in_min, in_max, input, out_min, out_max) {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function Scrollbar() {
  const thumbRef = useRef()
  const lenis = useLenis()
  const [innerMeasureRef, { height: innerHeight }] = useRect()
  const [thumbMeasureRef, { height: thumbHeight }] = useRect()

  useLenis(
    ({ scroll, limit }) => {
      const progress = scroll / limit

      thumbRef.current.style.transform = `translate3d(0,${
        progress * (innerHeight - thumbHeight)
      }px,0)`
    },
    [innerHeight, thumbHeight],
  )

  useEffect(() => {
    let start = null

    function onPointerMove(e) {
      if (!start) return
      e.preventDefault()

      const scroll = mapRange(
        start,
        innerHeight - (thumbHeight - start),
        e.clientY,
        0,
        lenis.limit,
      )
      lenis.scrollTo(scroll, { immediate: true })
    }

    function onPointerDown(e) {
      start = e.offsetY
    }

    function onPointerUp() {
      start = null
    }

    thumbRef.current?.addEventListener('pointerdown', onPointerDown, false)
    window.addEventListener('pointermove', onPointerMove, false)
    window.addEventListener('pointerup', onPointerUp, false)

    return () => {
      thumbRef.current?.removeEventListener('pointerdown', onPointerDown, false)
      window.removeEventListener('pointermove', onPointerMove, false)
      window.removeEventListener('pointerup', onPointerUp, false)
    }
  }, [lenis, innerHeight])

  return (
    <ScrollbarWrapper>
      <div ref={innerMeasureRef} className="inner">
        <div
          className="thumb"
          ref={(node) => {
            thumbRef.current = node
            thumbMeasureRef(node)
          }}
        />
      </div>
    </ScrollbarWrapper>
  )
}

export default Scrollbar
