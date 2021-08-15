export const Types = {
  SET_ELETRONICS: 'eletronics/SET_ELETRONICS',
  SET_ELETRONIC: 'eletronics/SET_ELETRONIC'
}

const initialState = {
  eletronics: [],
  eletronicsSelected: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_ELETRONICS:
      return { ...state, eletronics: action.payload }
      break
    case Types.SET_ELETRONIC:
      return { ...state, eletronicsSelected: action.payload }
    default:
      return state
  }
}

export function setEletronics(eletronics) {
  return {
    type: Types.SET_ELETRONICS,
    payload: eletronics
  }
}

export function setEletronic(eletronic) {
  return {
    type: Types.SET_ELETRONIC,
    payload: eletronic
  }
}
