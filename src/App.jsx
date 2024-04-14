import { Box } from '@mui/material'
import './App.css'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExerciseDetail from './pages/ExerciseDetail'
import NotFound from './pages/NotFound'
import Footer from './component/Footer'
function App() {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route index excat element={<HomePage />} />
          <Route path="exercise" element={<ExerciseDetail />} />
          <Route />
        </Routes>
        <Footer />
      </Box>
    </>
  )
}

export default App
