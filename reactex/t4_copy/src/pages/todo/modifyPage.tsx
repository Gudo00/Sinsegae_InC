import ModifyComponent from "../../components/todo/modifyComponent.tsx";


function ModifyPage() {
    return (
        <div className={'mt-3 p-3 bg-blue-200 w-full h-full'}>
            <div>Todo Modify Page</div>
            <div>
                <ModifyComponent></ModifyComponent>
            </div>
        </div>
    );
}

export default ModifyPage;