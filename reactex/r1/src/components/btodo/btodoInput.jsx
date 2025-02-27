import {useState} from "react";

function BtodoInput({addTodo}) {

    const [title, setTitle] = useState()

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}
            onClick={() => {}}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg w-96"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 방지
            >
                B Todo Input
                <div>
                    <input type={'text'} value={title}
                           onChange={ e => { setTitle(e.target.value) }}/>
                    <button onClick={ () => {
                        addTodo(title)
                        setTitle('')
                    }}>SAVE</button>
                </div>
            </div>
        </div>
    );
}

export default BtodoInput;