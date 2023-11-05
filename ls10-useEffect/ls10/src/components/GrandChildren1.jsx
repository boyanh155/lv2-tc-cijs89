import React, { useContext } from 'react'
import TodoListContext from './Context/TodoListContext'

const GrandChildren1 = () => {
    const todos = useContext(TodoListContext)
  return (
    <ul>
        {
            todos.todos.map((v,i)=><li key={i}>{v.name}<button>
                X</button></li>)
        }
    </ul>
  )
}

export default GrandChildren1