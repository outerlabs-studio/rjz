'use client'

import styled from 'styled-components'

export const FAQWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 8vw 0;
`
export const TextWrapper = styled.div`
  grid-column: 2 / 5;
  margin-top: -1vw;

  p:nth-child(2) {
    margin: 3vw 0 1vw;
  }
`
export const QuestionsWrapper = styled.div`
  grid-column: 6 / 12;
`
export const Question = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.2vw solid ${({ theme }) => `rgb(${theme.lightGray})`};
  cursor: pointer;

  &:last-child {
    border-bottom: 0.2vw solid ${({ theme }) => `rgb(${theme.lightGray})`};
  }
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2vw;
  padding-bottom: 2vw;
  color: ${({ theme, $active }) =>
    $active ? `rgb(${theme.blue})` : `rgb(${theme.black})`};
`
export const ExpandSpan = styled.span`
  width: 1.2vw;
  height: 0.3vw;
  background: ${({ theme }) => `rgb(${theme.black})`};
`
export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const ContentWrapper = styled.div`
  overflow: hidden;
  padding-left: 2vw;
`
