import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getTodo, getTodoList, postTodo, updateTodo} from "./apis/todoApi.tsx";

function App() {
  const [count, setCount] = useState(0)

    const todo:Todo = {title: "React로 생성하는 Todo !", writer:"Gudo"}

    postTodo(todo).then((result:number) => {
        console.log(result)
    })

    // updateTodo(252, "React Update 252").then((result:Todo) => {
    //     console.log(result)
    // })

    // getTodoList(2,50).then((result: PageResponse<Todo>) => {
    //     console.log(result)
    //
    // })

    // getTodo(252).then((result: Todo) => {
    //     console.log(result)
    // }).catch(reason => {
    //     console.log(reason)
    // })



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
