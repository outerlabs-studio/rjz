'use client'

import styled from 'styled-components'
import { Z_INDEX } from 'styles'

export const HeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.home.hero};
`
export const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: inherit;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  color: ${({ theme }) => `rgb(${theme.white})`};
`
export const TextWrapper = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  z-index: ${Z_INDEX.home.hero};
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;

  p {
    max-width: 40%;
  }
`
export const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${(props) =>
    props.bottom &&
    `
    padding: 2vw 0;
    z-index: ${Z_INDEX.home.hero + 2};
    align-items: flex-end;
  `}
`
export const ForeGroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  filter: brightness(50%);
  z-index: ${Z_INDEX.home.hero + 1};
  pointer-events: none;
`
export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  filter: brightness(50%);
  z-index: ${Z_INDEX.home.hero - 1};
  pointer-events: none;
`
