import useLoginStore from "../../stores/loginStore.tsx";

function LoginComponent() {

    const {login} = useLoginStore()


    return (
        <div>
            <h1>Login Component</h1>

            <button onClick={() => {
                login('user00')
            }} >LOGIN</button>

        </div>
    );
}

export default LoginComponent;