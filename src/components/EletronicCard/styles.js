import styled from 'styled-components'

export const Eletronic = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 1rem;
  background-color: white;
  border-left: 5px solid transparent;
  :hover {
    border-left: 5px solid #008b8b;
    background-color: ${props => props.theme.colors.background};
    border-left-color: ${props => props.theme.colors.primary};
  }
`
export const EletronicInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  margin-bottom: 0.8rem;
`

export const Address = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
`

export const EletronicPhoto = styled.img`
  display: ${props => (props.imageLoaded ? 'block' : 'none')};
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`
