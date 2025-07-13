import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteFuncional from './components/ComponenteFuncional'
import PropsExample from './components/PropsExample'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <ComponenteFuncional />
      <PropsExample nome="Danilo" tempo={20} />
    </>
  )
}

export default App