import {NavLink} from "react-router";
import useLoginStore from "../../stores/loginStore.tsx";

function TopMenuComponent() {

    const {user, logout} = useLoginStore()

    return (
        <div>
            <hr/>
            TOP MENU
            <div>
                {user &&
                    <div>
                        {user}님 반갑습니다.
                        <button onClick={logout}>로그아웃</button>
                    </div>
                }
            </div>

            <NavLink to={'/member/login'}>Login</NavLink>
            <NavLink to={'/todo/list'}>Todo</NavLink>
            <hr/>
        </div>
    );
}

export default TopMenuComponent;