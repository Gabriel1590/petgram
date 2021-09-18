import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }

    to {
        filter: blur(0px);
        opacity: 1;
    }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${time} ${fadeInKeyFrames} ${type};`

const fadeInOutFrames = keyframes`
    0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`

export const fadeInOut = ({ time = '4s' } = {}) => css`animation: ${fadeInOutFrames} ${time} linear infinite;`
