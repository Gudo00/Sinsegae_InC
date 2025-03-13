import {useState} from "react";
import useCustomLogin from "../../hooks/useCustomLogin.tsx";


function LoginComponent() {

    const [text, setText] = useState('')

    const {signin} = useCustomLogin()

    return (
        <div>
            <h2>Login Component</h2>
            <input type={'text'} value={text} onChange={e => {
                setText(e.target.value)
            }}/>
            <button onClick={() => {
                signin(text)
            }}>Login</button>
        </div>
    );
}

export default LoginComponent;