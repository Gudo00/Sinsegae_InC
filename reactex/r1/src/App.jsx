import './App.css'
import HelloComponent from "./components/helloComponent.jsx";
import TodoAdd from "./components/todo/todoAdd.jsx";
import TodoList from "./components/todo/todoList.jsx";
import Count1 from "./components/count/count1.jsx";
import ForEx from "./components/count/forEx.jsx";
import ForEx2 from "./components/count/forEx2.jsx";
import Count2 from "./components/count2/Count2.jsx";
import ArrayTest from "./components/count2/ArrayTest.jsx";
import CountContainer from "./components/count2/CountContainer.jsx";

function App() {

    // const countValue ={
    //     value: 10,
    //     resetShow:true,
    //     plusShow:true,
    //     minusShow:false
    // }

  return (
    <div className={'m-2 p-2 bg-blue-200 border-2'}>
        {/*<HelloComponent></HelloComponent>*/}
        {/*<TodoAdd></TodoAdd>*/}
        {/*<TodoList></TodoList>*/}
        {/*<Count1 value = {1} plusShow={true} minusShow={true}></Count1>*/}
        {/*<ForEx></ForEx>*/}
        {/*<ForEx2></ForEx2>*/}
        {/*<Count2></Count2>*/}
        {/*<ArrayTest></ArrayTest>*/}
        <CountContainer></CountContainer>

    </div>
  )
}

export default App
