import {ChangeEvent, useState} from "react";

interface TodoInputProps{
    addTodo: (str: string) => void
}

function TodoInput({addTodo}: TodoInputProps ) {

    const [title, setTitle] = useState<string>('')

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }

    return (
        <div className={'m-2 p-2 h-1/5 flex justify-center items-center'}>
            <input
                type={'text'}
                className={'w-2/4 bg-white p-2 h-10'}
                value={title}
                onChange={ handleChange }
            />

            <button
                className={'p-2 border-1'}
                onClick={ () => {
                    addTodo(title)
                    setTitle('')
                }}
            >SAVE</button>
        </div>
    );
}

export default TodoInput;