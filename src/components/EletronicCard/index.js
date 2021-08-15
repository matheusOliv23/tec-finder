import React from 'react'
import ReactStars from 'react-rating-stars-component'

import {
  Eletronic,
  EletronicInfo,
  EletronicPhoto,
  Title,
  Address
} from './styles'

import eletronico from '../../assets/logo.png'

const EletronicCard = ({ eletronic, onClick }) => (
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
      src={eletronic.photos ? eletronic.photos[0].getUrl() : eletronico}
      alt="foto da loja"
    />
  </Eletronic>
)

export default EletronicCard
