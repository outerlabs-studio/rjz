'use client'

import styled, { css } from 'styled-components'
import { Medium } from 'styles'
import { ArrowIcon } from './svg'

const SharedButtonStyles = css`
  display: flex;
  align-items: center;
  padding: 2vw 2vw;
  width: fit-content;
  gap: 5vw;
  border-radius: 9999px;

  svg {
    width: 3vw;
    height: 3vw;
  }
`
const ButtonWrapper = styled.a`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme, $bgColor }) =>
    $bgColor ? `rgb(${$bgColor})` : `rgb(${theme.white})`};
  cursor: pointer;
  ${SharedButtonStyles}

  &:hover {
    transition: clip-path 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    .inner {
      clip-path: inset(0 round 4.25rem);
      transition: clip-path 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    .top_svg_arrow {
      transform: translateX(100%);
    }
    .bottom_svg_arrow {
      transform: translateX(0);
    }
  }

  svg {
    color: ${({ theme }) => `rgb(${theme.black})`};
  }
`
const InnerText = styled.span`
  ${Medium}
  white-space: nowrap;
  color: ${({ $textColor, inner, theme }) =>
    $textColor
      ? `rgb(${$textColor})`
      : inner
        ? `rgb(${theme.white})`
        : `rgb(${theme.black})`};
`
const AnimateButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  inset: 0;
  background-color: ${({ theme, $buttonColor }) =>
    $buttonColor ? `rgb(${$buttonColor})` : `rgb(${theme.blue})`};
  clip-path: inset(1vw 1vw 1vw calc(100% - 6vw) round 9999px);
  transition: clip-path 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  ${SharedButtonStyles}

  svg {
    color: ${({ theme, $arrowColor }) =>
      $arrowColor ? `rgb(${$arrowColor})` : `rgb(${theme.white})`};
    transition: clip-path 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    .top_svg_arrow {
      transition: transform 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    .bottom_svg_arrow {
      transform: translateX(-100%);
      transition: transform 0.65s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
  }
`

const CustomButton = ({
  href,
  $buttonColor,
  $arrowColor,
  $bgColor,
  $textColor,
  children,
}) => {
  return (
    <ButtonWrapper href={href} $bgColor={$bgColor}>
      <InnerText $textColor={$textColor}>{children}</InnerText>
      <ArrowIcon />
      <AnimateButton
        className="inner"
        $buttonColor={$buttonColor}
        $arrowColor={$arrowColor}
      >
        <InnerText $textColor={$textColor} inner>
          {children}
        </InnerText>
        <ArrowIcon />
      </AnimateButton>
    </ButtonWrapper>
  )
}

export default CustomButton
