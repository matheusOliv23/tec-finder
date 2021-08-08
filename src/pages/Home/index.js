import React, { useState } from 'react'
import Slider from 'react-slick'
import TextField, { Input } from '@material/react-text-field'
import {
  Container,
  Carousel,
  Search,
  Logo,
  Wrapper,
  Map,
  CarouselTitle
} from './style'

import logo from '../../assets/logo.png'
import restaurante from '../../assets/restaurante-fake.png'
import { Card } from '../../components'

const Home = () => {
  const [inputValue, setInputValue] = useState('')

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo do app" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            //trailingIcon={<MaterialIcon role="button" icon="delete" />}*/
          >
            <Input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua região</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="nome" />
            <Card photo={restaurante} title="nome" />
            <Card photo={restaurante} title="nome" />
            <Card photo={restaurante} title="nome" />
            <Card photo={restaurante} title="nome" />
            <Card photo={restaurante} title="nome" />
          </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  )
}

export default Home
