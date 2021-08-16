import styled from 'styled-components'
import Slider from 'react-slick'
import px2vw from '../../utils/px2vw'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Container = styled.aside`
  background-color: ${props => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 1rem;
  margin-top: 1rem;
`
export const Logo = styled.img`
  margin-bottom: 1rem;
  width: 20rem;
  height: 13rem;
  border-radius: 50%;
`
export const Map = styled.div`
  background-color: red;
  width: 500px;
`
export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 2rem;
  }
`

export const CarouselTitle = styled.h1`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.5rem;
  margin: 1rem 0;
`
export const ModalTitle = styled.p`
  margin-bottom: 0.7rem;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  letter-spacing: 0.2rem;
  text-transform: none;
  line-height: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
`
export const ModalContent = styled.p`
  margin-bottom: 0.7rem;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  letter-spacing: 0.2rem;
  text-transform: none;
  font-weight: normal;
  line-height: 1.6rem;
  font-size: 1rem;
`
