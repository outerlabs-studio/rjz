'use client'

import styled from 'styled-components'
import { GridWrapper, Z_INDEX } from 'styles'

export const InfoWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: ${Z_INDEX.home.info};
  background-color: ${({ theme }) => `rgb(${theme.white})`};
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin-bottom: 12vw;
`
export const CustomGridWrapper = styled(GridWrapper)`
  margin: 6vw 0;
  ${({ bottom }) => bottom && `margin-top: 40vw;`}
`
export const TitleLine = styled.div`
  grid-column: 1 / 13;
  display: flex;
  margin-bottom: 2vw;
  justify-content: ${({ bottom }) => (bottom ? 'flex-end' : 'flex-start')};
`
export const ParagraphWrapper = styled.div`
  grid-column: ${({ bottom }) => (bottom ? '8 / 12' : '2 / 6')};
`
export const ParallaxImageWrapper = styled.div`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? '-10%' : '-80%')};
  left: ${({ bottom }) => (bottom ? '10%' : '50%')};
  width: 35vw;
  height: 40vw;
  border-radius: 4vw;
  z-index: -1;
`
