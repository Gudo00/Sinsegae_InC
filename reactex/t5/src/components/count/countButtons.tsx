import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store.tsx";
import {inc, dec} from "../../slices/countSlice.tsx";

function CountButtons() {

    const dispatch = useDispatch<AppDispatch>()

    return (

        <div>
            <button onClick={() => {
                dispatch( inc(10) )
            }}
            >PLUS</button>

            <button onClick={() => {
                dispatch( dec(5) )
            }}>MINUS</button>

        </div>
    );
}

export default CountButtons;