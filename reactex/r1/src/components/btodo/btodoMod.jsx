import {useState} from "react";

function BtodoMod({current, removeTodo, updateTodo, hideMod}) {

    const [titleStr, setTitleStr] = useState(current.title)

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}
            onClick={() => { }}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg w-96"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 방지
            >
                B Todo Modify
                <div>
                    <div>
                        {current.tid}
                    </div>
                    <div>
                        <input type='text'
                               value={titleStr}
                               className={'p-2 border-1'}
                               onChange={e => setTitleStr(e.target.value) }/>
                    </div>
                    <div>
                        <button onClick={() => removeTodo(current.tid)}>삭제</button>
                        <button onClick={() => updateTodo(current.tid, titleStr)}>수정</button>
                        <button onClick={() => hideMod()}>취소</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BtodoMod;