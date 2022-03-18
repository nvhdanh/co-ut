import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createContext, useEffect, useState } from 'react'

export const darkContext = createContext({ darkMode: '', toggleMode: () => {} })

export const DarkProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' ? true : false)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })
  const toggleMode = () => {
    setDarkMode((darkMode) => !darkMode)
  }

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <darkContext.Provider value={{ darkMode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </darkContext.Provider>
  )
}
