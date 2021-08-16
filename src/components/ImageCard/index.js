import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Skeleton from '../Skeleton'

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  height: 90px;
  padding: 0.3rem;
  border-radius: 6px;
  background-image: url(${props => props.photo});
  background-size: cover;
`
const Title = styled.p`
  font-family: ${props => props.theme.fonts.regular};
  color: white;
  font-size: 1rem;
  margin-top: 0.6rem;
  margin-left: 0.6rem;
`

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const imageLoader = new Image()
    imageLoader.src = photo
    imageLoader.onload = () => setImageLoaded(true)
  }, [photo])

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  )
}

export default ImageCard
