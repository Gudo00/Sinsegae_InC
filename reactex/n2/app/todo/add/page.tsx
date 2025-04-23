
'use client'


import TodoAddComponent from "@/app/components/todo/addComponent";

function TodoAddPage () {
    return (
        <div>
            <div className={'text-4xl'}>Todo Add Page</div>

            <div className={'m-6 mt-5 p-5'}>
                <TodoAddComponent/>
            </div>

        </div>
    )
}

export default TodoAddPage
