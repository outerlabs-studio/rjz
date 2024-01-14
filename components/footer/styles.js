'use client'

import styled from 'styled-components'
import { GridWrapper, Huge, Normal, Z_INDEX } from 'styles'

export const FooterWarpper = styled.footer`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 2vw;
  z-index: ${Z_INDEX.footer};
  background-color: ${({ theme }) => `rgb(${theme.black})`};

  h1 {
    padding-right: 10vw;
    color: ${({ theme }) => `rgb(${theme.white})`};
  }
`
export const LogoWrapper = styled.div`
  grid-column: 1 / 3;
  position: relative;
  width: 100%;
  aspect-ratio: 7 / 2;
`
export const FooterLayout = styled.div`
  display: grid;
  grid-template-rows: auto 2fr 1fr auto;
  width: 100%;
  height: 100%;
`
export const TopGridWrapper = styled(GridWrapper)`
  padding: 4vw 0 3vw;
  border-bottom: 0.2vw solid ${({ theme }) => `rgb(${theme.darkGray})`};
`
export const MiddleGridWrapper = styled(GridWrapper)`
  padding: 2vw 0 2vw;
`
export const BottomFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2vw 0;
  color: ${({ theme }) => `rgb(${theme.darkGray})`};

  span {
    color: ${({ theme }) => `rgb(${theme.darkGray})`};
    display: inline-flex;
  }
`
export const DescriptionWrap = styled.div`
  grid-column: 1 / 4;

  p {
    color: ${({ theme }) => `rgb(${theme.darkGray})`};
    padding-bottom: 1vw;
  }
`
export const ColTitle = styled.p`
  ${Normal}
  margin-bottom: 1vw;
  margin-top: 0;
  color: ${({ theme }) => `rgb(${theme.white})`};
`
export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1vw;

  a,
  p {
    color: ${({ theme }) => `rgb(${theme.darkGray})`};
  }
`
export const Columns = styled.div`
  grid-column: 6 / 13;
  display: flex;
  gap: 8vw;
`
export const ButtonWrap = styled.div`
  grid-column: 1 / 5;
`
export const LinkWrapper = styled.div`
  grid-column: 6 / 13;

  a {
    ${Huge}
    color: ${({ theme }) => `rgb(${theme.darkGray})`};
  }
`
