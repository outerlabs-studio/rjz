'use client'

import styled, { css } from 'styled-components'

export const SolutionsWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 8vw 0;

  h1 {
    padding-right: 10vw;

    span {
      color: ${({ theme }) => `rgb(${theme.blue})`};
    }
  }
`
export const ParagraphWrapper = styled.div`
  grid-column: 6 / 9;
  padding: 4vw;
`

const SharedListItems = css`
  padding: 2vw 0 1.75vw;

  .grid-item {
    align-items: center;
  }

  .item-name {
    grid-column: 3 / 8;
  }

  svg {
    grid-column: 12 / 13;
    width: 100%;
    height: auto;
    margin-top: -1vw;
  }
`
export const ListItem = styled.a`
  position: relative;
  display: inline-block;
  width: 100%;
  border-bottom: 0.2vw solid ${({ theme }) => `rgb(${theme.lightGray})`};
  text-decoration: none;
  transition: clip-path 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  &:hover {
    .inner {
      clip-path: inset(0% 0 0 0);
      transition: clip-path 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      transition: clip-path 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
  }

  &:first-child {
    border-top: 0.1vw solid ${({ theme }) => `rgb(${theme.lightGray})`};
  }
`
export const InnerList = styled.div`
  ${SharedListItems}
  color: ${({ theme }) => `rgb(${theme.black})`};
`
export const AnimList = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  z-index: 2;
  inset: 0;
  color: ${({ theme }) => `rgb(${theme.white})`};
  background-color: ${({ theme }) => `rgb(${theme.blue})`};
  transition: clip-path 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  clip-path: inset(100% 0 0 0);
  align-items: center;

  p {
    padding-right: 5vw;
  }
`
