function Todoitem({todo,showModal}) {

    const {tid,title} = todo

    return (
        <li className={'bg-indigo-400 border-1 p-3'}>
            <div>
                <div>
                    {tid}
                </div>
                <div>
                    {title}
                </div>
                <div>
                    <button onClick={() => showModal(todo)}
                            className={'border-2 bg-blue-100 p-1 font-semibold'}>
                        MOD/DEL
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Todoitem;