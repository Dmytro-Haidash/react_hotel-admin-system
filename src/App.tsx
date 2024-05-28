import { Navigate, Route, Routes } from 'react-router-dom'
import { Content } from './components/Content'
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage'
import { MessageContainer } from './components/MessageNotification'
import './App.scss'

function App() {
  return (
    <div className='page'>
      <MessageContainer />

      <Routes>
        <Route path="/" element={<Content />}>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
