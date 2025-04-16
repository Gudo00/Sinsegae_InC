
interface LoadingComponentProps {
    isLoading:boolean
}

export default function LoadingComponent({ isLoading } :LoadingComponentProps ) {

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
             style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}  >
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg font-semibold text-gray-700">처리중..</p>
            </div>
        </div>
    );
}
