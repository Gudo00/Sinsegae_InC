import TodoAddComponent from "~/components/todo/addComponent";


export default function() {

    console.log("Todo Add Page")

    return (
        <div>
            <div className={'text-4xl'}>Todo Add Page</div>
            <TodoAddComponent></TodoAddComponent>
        </div>
    )
}