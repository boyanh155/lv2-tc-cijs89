import { useState } from 'react'
import Title from './Title'
import InputTodo from './InputTodo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      width:'100vw',
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    }}>
      <div style={{
        display:'flex',
        flexDirection:'column'
      }}>

      <Title/>
      <InputTodo/>
      </div>
    </div>
  )
}

export default App
