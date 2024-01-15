'use client'

import styled, { css } from 'styled-components'
import media from './media'

export const Normal = css`
  font-size: 1vw;
  font-weight: 400;
  line-height: 1.3;

  ${media.desktop`font-size: 1.5vw;`}
  ${media.tablet`font-size: 18px;`}
`
export const NormalText = styled.p`
  ${Normal}
  margin: ${({ $nm, $m }) => ($nm ? 0 : $m ? $m : 'unset')};
`
export const Medium = css`
  font-size: 1.4vw;
  font-weight: 400;
  line-height: 1.1;

  ${media.desktop`font-size: 24px;`}
`
export const MediumText = styled.p`
  ${Medium}
  margin: ${({ $nm, $m }) => ($nm ? 0 : $m ? $m : 'unset')};
`
export const Huge = css`
  font-size: 3.5vw; // 64px
  font-weight: 400;
  line-height: 1.2;

  ${media.desktop`font-size: 4vw;`}
  ${media.thone`
    font-size: 8vw;
  `}
`
export const HugeText = styled.p`
  ${Huge}
  margin: ${({ $nm, $m }) => ($nm ? 0 : $m ? $m : 'unset')};
`
export const Display = css`
  font-size: 12.5vw; // 180px
  font-weight: 400;
  line-height: 1.1;

  ${media.desktop`
    font-size: 10vw;
    letter-spacing: -0.5vw;
  `}
  ${media.thone`font-size: 15vw;`}
`
export const DisplayText = styled.h1`
  ${Display}
  margin: ${({ $nm, $m }) => ($nm ? 0 : $m ? $m : 'unset')};
`
