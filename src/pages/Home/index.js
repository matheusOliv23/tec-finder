import React, { useState } from 'react'
//import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import TextField, { Input } from '@material/react-text-field'
import {
  Container,
  Carousel,
  Search,
  Logo,
  Wrapper,
  CarouselTitle
} from './style'

import logo from '../../assets/logo.png'
import eletronico from '../../assets/logo.png'
import { Card, Modal, EletronicCard, Map } from '../../components'

const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [query, setQuery] = useState(null)
  const [modalOpened, setModalOpened] = useState(true)
  const { eletronics } = useSelector(state => state.eletronics)

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue)
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo do app" />
          <TextField label="Pesquisar lojas" outlined>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={e => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua região</CarouselTitle>
          <Carousel {...settings}>
            {eletronics.map(eletronic => (
              <Card
                key={eletronic.place_id}
                photo={
                  eletronic.photos ? eletronic.photos[0].getUrl() : eletronico
                }
                title={eletronic.name}
              />
            ))}
          </Carousel>
        </Search>
        {eletronics.map(eletronic => (
          <EletronicCard eletronic={eletronic} />
        ))}
      </Container>
      <Map query={query} />
    </Wrapper>
  )
}

export default Home
