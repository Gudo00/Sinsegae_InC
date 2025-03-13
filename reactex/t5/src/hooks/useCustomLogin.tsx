import {login, LoginDTO, logout} from "../slices/loginSlice.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store.tsx";


const useCustomLogin = () => {

    const loginDTO: LoginDTO = useSelector((state: RootState) => state.loginSlice)

    const dispatch = useDispatch<AppDispatch>()

    const signin = (username:string) => {

        dispatch(login(username))
    }

    const signout = () => {

        dispatch(logout())
    }

    return {signin, signout, loginDTO}
}

export default useCustomLogin