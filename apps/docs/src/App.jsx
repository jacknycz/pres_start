import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import ThemePickerModal from './theme/ThemePickerModal'
import './App.css'

// Layout & Pages
import Layout from './theme/Layout'
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
import ExampleButtonGroup from './examples/ExampleButtonGroup'
import ExampleTooltip from './examples/ExampleTooltip'

import ExampleProgress from './examples/ExampleProgress'
import ExampleSpinner from './examples/ExampleSpinner'
import ExampleHeading from './examples/ExampleHeading'
import ExampleLink from './examples/ExampleLink'
import ExampleToast from './examples/ExampleToast'
import ExampleTag from './examples/ExampleTag'
import ExampleChatbot from './examples/ExampleChatbot'

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
  { path: 'examplebuttongroup', element: <ExampleButtonGroup /> },
  { path: 'exampletooltip', element: <ExampleTooltip /> },

  { path: 'exampleprogress', element: <ExampleProgress /> },
  { path: 'examplespinner', element: <ExampleSpinner /> },
  { path: 'exampleheading', element: <ExampleHeading /> },
  { path: 'examplelink', element: <ExampleLink /> },
  { path: 'exampletoast', element: <ExampleToast /> },
  { path: 'exampletag', element: <ExampleTag /> },
  { path: 'examplechatbot', element: <ExampleChatbot /> },
  { path: 'typography', element: <Typography /> },
  { path: 'colors', element: <Colors /> },
]

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemePickerModal />
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ path, element, index }) => (
              <Route key={path} path={path} element={element} index={index} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
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
