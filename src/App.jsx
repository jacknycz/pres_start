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
import ExampleIconButtons from './examples/ExampleIconButtons'

const routes = [
  { path: '/', element: <Home />, index: true },
  { path: 'examplebuttons', element: <ExampleButtons /> },
  { path: 'examplebadges', element: <ExampleBadges /> },
  { path: 'examplemenus', element: <ExampleMenus /> },
  { path: 'exampleavatars', element: <ExampleAvatars /> },
  { path: 'exampleaccordions', element: <ExampleAccordions /> },
  { path: 'exampletabs', element: <ExampleTabs /> },
  { path: 'examplemodals', element: <ExampleModals /> },
  { path: 'exampletextinput', element: <ExampleTextInput /> },
  { path: 'exampleselectinput', element: <ExampleSelectInput /> },
  { path: 'examplecheckbox', element: <ExampleCheckbox /> },
  { path: 'exampleradiogroup', element: <ExampleRadioGroup /> },
  { path: 'exampletoggleswitch', element: <ExampleToggleSwitch /> },
  { path: 'exampleiconbuttons', element: <ExampleIconButtons /> },
  { path: 'typography', element: <Typography /> },
  { path: 'colors', element: <Colors /> },
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, element, index }) => (
            <Route key={path} path={path} element={element} index={index} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// Export the App component for potential imports elsewhere
export default App

// Mount the application to the DOM
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
