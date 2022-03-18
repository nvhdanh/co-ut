import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/header.component'
import Home from './pages/home.page'

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
