import {useSelector} from "react-redux";
import {RootState} from "../../store.tsx";
import {CountState} from "../../slices/countSlice.tsx";
import {LoginDTO} from "../../slices/loginSlice.tsx";

function CountContainer() {

    const {count}: CountState = useSelector( (state: RootState) => state.countSlice)

    const {username}: LoginDTO = useSelector((state: RootState) => state.loginSlice)

    console.log(count)

    return (
        <>
            <h1>{username}</h1>
            <h1>COUNT {count}</h1>
        </>
    );
}

export default CountContainer;