import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// root를 react의 루트로 설정
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 앱 컴포넌트를 렌더링 하고있음 */}
    <App />
  </React.StrictMode>,
)
