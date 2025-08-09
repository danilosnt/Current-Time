import Title from "./components/Title"
import Hour from "./components/Hour"

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#dcdcdcff'}}>
      <Title />
      <Hour />
    </div>
  )
}

export default App;