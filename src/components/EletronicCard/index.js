import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'

import {
  Eletronic,
  EletronicInfo,
  EletronicPhoto,
  Title,
  Address
} from './styles'

import eletronico from '../../assets/logo.png'
import Skeleton from '../Skeleton'

const EletronicCard = ({ eletronic, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <Eletronic onClick={onClick}>
      <EletronicInfo>
        <Title>{eletronic.name}s</Title>
        <ReactStars
          count={5}
          isHalf
          value={eletronic.rating}
          edit={false}
          activeColor="#e7711c"
        />
        <Address>{eletronic.vicinity || eletronic.formatted_address}</Address>
      </EletronicInfo>
      <EletronicPhoto
        imageLoaded={imageLoaded}
        src={eletronic.photos ? eletronic.photos[0].getUrl() : eletronico}
        onLoad={() => setImageLoaded(true)}
        alt="foto da loja"
      />

      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Eletronic>
  )
}

export default EletronicCard
