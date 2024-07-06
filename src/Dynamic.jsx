import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  // function for add button
  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false },]
    })

    setNewItem("")
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
      return currentTodos.filter(todo  => todo.id !== id)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}