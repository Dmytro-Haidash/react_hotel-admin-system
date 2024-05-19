import './App.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Content } from './components/Content'

function App() {

  return (
    <div className='page'>
      <Routes>
        <Route path="/" element={<Content />}>
          {/* <Route path='rooms' element={<div /> } />
          <Route path="tabs/:tabId?" element={<div />} /> */}
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
