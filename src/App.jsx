import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Badge from './components/Badge/Badge'
import Button from './components/Button/Button'
import Menu from './components/Menu'

// Example Components
import ExampleButtons from './examples/ExampleButtons'
import ExampleBadges from './examples/ExampleBadges'
import ExampleMenus from './examples/ExampleMenus'
import ExampleAvatars from './examples/ExampleAvatars'
import Layout from './components/Layout'
import Home from './components/Home'

// Icons
import { PlayArrow, ArrowForward } from '@mui/icons-material';
import Pres from './assets/Pres'
import ExampleAccordions from './examples/ExampleAccordions'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="examplebuttons" element={<ExampleButtons />} />
          <Route path="examplebadges" element={<ExampleBadges />} />
          <Route path="examplemenus" element={<ExampleMenus />} />
          <Route path="exampleavatars" element={<ExampleAvatars />} />
          <Route path="exampleaccordions" element={<ExampleAccordions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
