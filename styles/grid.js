'use client'

import styled, { css } from 'styled-components'
import media from './media'

export const Grid = css`
  display: grid;
  position: relative;
  grid-column-gap: 2vw;
  grid-row-gap: 0;
  grid-template-columns: repeat(12, 1fr);

  ${media.tablet`
    grid-gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
  `}
`
export const GridWrapper = styled.div`
  ${Grid}
`
