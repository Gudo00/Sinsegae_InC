import ListComponent from "../../components/todo/listComponent.tsx";

function ListPage() {
    return (
        <div className={'mt-3 p-3 bg-blue-200 w-full h-full'}>
            <div>Todo List</div>
            <div>
                <ListComponent></ListComponent>
            </div>
        </div>
    );
}

export default ListPage;