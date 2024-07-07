import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./newTodoForm"
import { ToDoList } from "./ToDoList"

export default function App() {
  // Makes the default state of todos array get values from LOCALSTORAGE
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  // Hook, must be used at top level
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false },]
    })
  }


  // function to handle checkbox, onchange calls function, calls using todo ID, checks if it is the correct todo, before returning checkbox completed state.
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        // return nothing if todo id does not match
        return todo
      })
    })
  }

  // function to delete todo item, filter logic: If my todo ID is not = to reference ID, keep it in the list.
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}