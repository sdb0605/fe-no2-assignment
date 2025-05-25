import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dex" element={<Dex/>} />
        <Route path="/detail" element={<CardDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
