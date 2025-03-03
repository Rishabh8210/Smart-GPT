import ConversationPanel from './pages/ConversationPanel'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/conversation' element={ <ConversationPanel /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
