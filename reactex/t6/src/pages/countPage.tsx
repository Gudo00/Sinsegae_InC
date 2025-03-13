import useCountStore, {CountState} from "../stores/countStore.tsx";
import TopMenuComponent from "../components/menu/topMenuComponent.tsx";

function CountPage() {

    const {num,inc}:CountState = useCountStore()

    return (
        <div>
            <TopMenuComponent/>
            <div>Count Page {num}</div>

            <div>
                <button onClick={() =>inc(2)} >INC</button>
            </div>
        </div>
    );
}

export default CountPage;