'use client'

import styled from 'styled-components'
import { Z_INDEX } from 'styles'

export const ExperienceWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 8vw;
  overflow: hidden;
  z-index: ${Z_INDEX.home.experience};
`
export const NumberWrapper = styled.p`
  font-size: 80vh;
  line-height: 0.75;
  color: ${({ theme }) => `rgb(${theme.black})`};
  margin: 0 0 4vw 0;
  z-index: ${Z_INDEX.home.experience};
`
