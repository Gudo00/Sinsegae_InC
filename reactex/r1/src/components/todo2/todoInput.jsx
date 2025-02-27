import {useState} from "react";

function TodoInput({addText}) {

    const [text, setText] = useState('ABC');

    // Input 태그에 사용자가 입력을 해서 내용물이 바뀔때 마다 호출
    const changeText = (e) => {
        setText(e.target.value)
    }

    const clickSave = () => {
        addText(text)

        setText('')
    }

    return (
        <div className = {'p-3 bg-emerald-500 h-full'}>
            <div>
                TodoInput
            </div>
            <div className = {'p-2 font-bold m-2 '}>
                <input type = {'text'}
                       className={'bg-amber-50 p-2 w-2/3'}
                        value={text}
                        onChange={e => changeText(e)}
                />
                <button className={'border-2 ml-3 p-3 bg-lime-400'}
                        onClick={clickSave}
                >SAVE 💾</button>
            </div>
        </div>
    );
}

export default TodoInput;