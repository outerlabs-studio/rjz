'use client'

import styled from 'styled-components'
import { Z_INDEX } from 'styles'

export const CTAWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 4vw;
  background-color: ${({ theme }) => `rgb(${theme.white})`};
  z-index: ${Z_INDEX.CTA};
`
export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 6vw;
  width: 100%;
  height: 100vh;
  border-radius: 4vw;
  color: ${({ theme }) => `rgb(${theme.white})`};
  background-color: ${({ theme }) => `rgb(${theme.blue})`};
  z-index: 2;

  h1 {
    pointer-events: none;
  }
`
export const CanvasWrapper = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: all;
  z-index: -1;
  border-radius: inherit;
`
