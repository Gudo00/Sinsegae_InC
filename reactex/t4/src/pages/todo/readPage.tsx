import ReadComponent from "../../components/todo/readComponent.tsx";

function ReadPage() {
    return (
        <div className={'mt-3 p-3 bg-blue-200 w-full h-full'}>
            <div>Todo Read</div>
            <div>
                <ReadComponent></ReadComponent>
            </div>
        </div>
    );
}

export default ReadPage;