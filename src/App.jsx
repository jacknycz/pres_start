import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Layout & Pages
import Layout from './components/Layout'
import Home from './pages/Home'
import Typography from './pages/Typography'
import Colors from './pages/Colors'

// Example Components
import ExampleButtons from './examples/ExampleButtons'
import ExampleBadges from './examples/ExampleBadges'
import ExampleMenus from './examples/ExampleMenus'
import ExampleAvatars from './examples/ExampleAvatars'
import ExampleAccordions from './examples/ExampleAccordions'
import ExampleTabs from './examples/ExampleTabs'
import ExampleModals from './examples/ExampleModals'
import ExampleSelectInput from './examples/ExampleSelectInput'
import ExampleTextInput from './examples/ExampleTextInput'
import ExampleCheckbox from './examples/ExampleCheckbox'
import ExampleRadioGroup from './examples/ExampleRadioGroup'
import ExampleToggleSwitch from './examples/ExampleToggleSwitch'

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
          <Route path="exampletabs" element={<ExampleTabs />} />
          <Route path="examplemodals" element={<ExampleModals />} />
          <Route path="exampletextinput" element={<ExampleTextInput />} />
          <Route path="exampleselectinput" element={<ExampleSelectInput />} />
          <Route path="examplecheckbox" element={<ExampleCheckbox />} />
          <Route path="exampleradiogroup" element={<ExampleRadioGroup />} />
          <Route path="exampletoggleswitch" element={<ExampleToggleSwitch />} />
          <Route path="typography" element={<Typography/>} />
          <Route path="colors" element={<Colors/>} />
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
