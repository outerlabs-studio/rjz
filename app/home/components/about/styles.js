'use client'

import styled from 'styled-components'
import { Z_INDEX } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8vw 0;
  z-index: ${Z_INDEX.home.about};
`
export const DescriptionWrapper = styled.div`
  grid-column: 2 / 9;

  .custom-link {
    margin-top: 4vw;
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  grid-column: 6 / 13;
  width: 100%;
  height: 40vw;
  border-radius: 3vw;
  margin: 6vw 0 2vw;
`
export const MoreInfoWrapper = styled.div`
  position: relative;
  grid-column: 6 / 9;
`
