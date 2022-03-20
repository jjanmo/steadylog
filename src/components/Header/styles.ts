import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

export const Container = styled.header<{ isScrolling: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: ${({ isScrolling }) => (isScrolling ? '7.5rem' : '5rem')};

  background-color: ${COLORS.PURPLE_01};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: all 0.2s ease-in-out;
  opacity: ${({ isScrolling }) => (isScrolling ? 0.85 : 1)};
`
export const Logo = styled.div<{ isScrolling: boolean }>`
  display: flex;
  font-weight: bold;
  position: relative;
  margin: 0 10rem;

  & > div:first-of-type {
    position: absolute;
    top: ${({ isScrolling }) => (isScrolling ? '50px' : '0px')};
    left: -40px;
    color: ${COLORS.YELLOW_01};
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    transition: all 0.4s ease-in-out;
  }
  & > div:last-of-type {
    color: ${COLORS.YELLOW_02};
    font-family: 'Hubballi', cursive;
    font-size: 3rem;
  }
  & > div {
    position: relative;
  }
`