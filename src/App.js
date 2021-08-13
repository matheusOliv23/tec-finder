import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import Home from './pages/Home'
import theme from './theme'
import '@material/react-text-field/dist/text-field.css'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  )
}

export default App
