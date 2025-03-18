import AddComponent from "../../components/todo/addComponent.tsx";

function AddPage() {
    return (
        <div className={'mt-3 p-3 bg-blue-200 w-full h-full'}>
            <div>
                <AddComponent></AddComponent>
            </div>
        </div>
    );
}

export default AddPage;