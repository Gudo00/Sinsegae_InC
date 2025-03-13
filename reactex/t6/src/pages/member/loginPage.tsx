import LoginComponent from "../../components/member/LoginComponent.tsx";
import TopMenuComponent from "../../components/menu/topMenuComponent.tsx";

function LoginPage() {


    return (
        <div>
            <TopMenuComponent/>

            <div>Login Page</div>

            <LoginComponent></LoginComponent>
        </div>
    );
}

export default LoginPage;