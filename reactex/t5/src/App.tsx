
import './App.css'
import CountContainer from "./components/count/countContainer.tsx";
import CountButtons from "./components/count/countButtons.tsx";
import LoginComponent from "./components/member/loginComponent.tsx";
import useCustomLogin from "./hooks/useCustomLogin.tsx";

function App() {

  const {loginDTO, signout} = useCustomLogin()

  return (
    <>

        <hr/>
        {!loginDTO.username &&
            <LoginComponent/>
        }
        <hr/>
        {loginDTO.username &&
        <>
            <CountContainer/>
            <CountButtons/>

            <div>
                <button onClick={signout}>LOGOUT</button>
            </div>
        </>
        }

    </>
  )
}

export default App
