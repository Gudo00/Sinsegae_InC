import btodoMod from "./btodoMod.jsx";

function BtodoList({showMod, arr}) {

    // setTimeout(() => {
    //     showMod()
    // },3000)

    return (
        <div>
            B Todo List
            <ul>
                {arr.map(todo =>
                    <li key = {todo.tid}>
                        {todo.title}
                        <button onClick={() => showMod(todo.tid)}>
                            MOD / DEL
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default BtodoList;