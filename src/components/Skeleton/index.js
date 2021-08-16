import React from 'react'
import styled, { keyframes } from 'styled-components'

const KeyFrameLoading = keyframes`
  0%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`

const LoadingSkeleton = styled.div`
  background-color: gray;
  border-radius: 0.5rem;
  margin-bottom: 0.6rem;
  min-width: ${props => props.width};
  height: ${props => props.height};
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`

export default ({ width, height }) => (
  <LoadingSkeleton width={width} height={height}></LoadingSkeleton>
)
