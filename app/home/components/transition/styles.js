'use client'

import styled from 'styled-components'
import { Z_INDEX } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: ${Z_INDEX.home.transition};
`
export const InnerContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 4vw;
  bottom: 0;
  z-index: ${Z_INDEX.home.transition + 1};
  color: ${({ theme }) => `rgb(${theme.white})`};
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  border-radius: 4vw;

  img {
    filter: brightness(50%);
  }
`
