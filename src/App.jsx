import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteFuncional from './components/ComponenteFuncional'
import ClassComponent from './components/ClassComponent'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <ComponenteFuncional />
      <ClassComponent />
    </>
  )
}

export default App