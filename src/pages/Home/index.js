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
  CarouselTitle,
  ModalTitle,
  ModalContent
} from './style'

import logo from '../../assets/logo.png'
import eletronico from '../../assets/logo.png'
import {
  Card,
  Modal,
  EletronicCard,
  Map,
  Loader,
  Skeleton
} from '../../components'

const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [query, setQuery] = useState(null)
  const [modalOpened, setModalOpened] = useState(false)
  const [placeId, setPlaceId] = useState(null)
  const { eletronics, eletronicsSelected } = useSelector(
    state => state.eletronics
  )

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

  function handleOpenModal(placeId) {
    setPlaceId(placeId)
    setModalOpened(true)
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
          {eletronics.length > 0 ? (
            <>
              <CarouselTitle>Na sua região</CarouselTitle>
              <Carousel {...settings}>
                {eletronics.map(eletronic => (
                  <Card
                    key={eletronic.place_id}
                    photo={
                      eletronic.photos
                        ? eletronic.photos[0].getUrl()
                        : eletronico
                    }
                    title={eletronic.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {eletronics.map(eletronic => (
          <EletronicCard
            onClick={() => handleOpenModal(eletronic.place_id)}
            eletronic={eletronic}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {eletronicsSelected ? (
          <>
            <ModalTitle>{eletronicsSelected?.name}</ModalTitle>
            <ModalContent>
              {eletronicsSelected?.formatted_phone_number}
            </ModalContent>
            <ModalContent>{eletronicsSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {eletronicsSelected?.opening_hours?.open_now
                ? 'Aberto agora! :)'
                : 'Está fechado no momento :('}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="0.5rem" height="0.5rem" />
            <Skeleton width="0.5rem" height="0.5rem" />
            <Skeleton width="0.5rem" height="0.5rem" />
            <Skeleton width="0.5rem" height="0.5rem" />
          </>
        )}
      </Modal>
    </Wrapper>
  )
}

export default Home
