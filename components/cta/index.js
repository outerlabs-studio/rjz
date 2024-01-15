'use client'

import { useEffect, useRef } from 'react'
import { Container, DisplayText, normalTheme } from 'styles'
import { CTAWrapper, CanvasWrapper, CardWrapper } from './styles'
import CustomButton from 'components/button'
import { useIsTouchDevice } from 'hooks'
import webGLFluidEnhanced from 'webgl-fluid-enhanced'

function componentToHex(c) {
  var hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

function rgbToHex(rgb) {
  let [r, g, b] = rgb.split(', ').map(Number)
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

const CTA = () => {
  const canvasRef = useRef(null)
  const touchDevice = useIsTouchDevice()

  useEffect(() => {
    if (touchDevice) return null
    else
      webGLFluidEnhanced.simulation(canvasRef.current, {
        PRESSURE: 0.2,
        SUNRAYS: true,
        // START_SPLATS: 0,
        // SPLAT_AMOUNT: 10,
        SPLAT_FORCE: 1500,
        DENSITY_DISSIPATION: 2,
        CURL: 0,
        COLOR_PALETTE: [rgbToHex(normalTheme.darkBlue)],
        BACK_COLOR: rgbToHex(normalTheme.darkBlue),
      })
  }, [])

  return (
    <CTAWrapper>
      <Container>
        <CardWrapper>
          <DisplayText>
            Let the safety
            <br />
            experts handle it
          </DisplayText>
          <CustomButton
            $buttonColor={normalTheme.black}
            $arrowColor={normalTheme.white}
            href={'/contact'}
          >
            Get a quote
          </CustomButton>
          <CanvasWrapper ref={canvasRef} />
        </CardWrapper>
      </Container>
    </CTAWrapper>
  )
}

export default CTA
