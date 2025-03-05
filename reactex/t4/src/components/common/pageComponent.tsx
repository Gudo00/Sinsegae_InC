// Props
interface PageComponentProps<T> {
    serverData: PageResponse<T>;
    moveListPage: (page:number) => void;
}

function PageComponent({ serverData, moveListPage }: PageComponentProps<unknown>) {
    const { page, prev, next, start, end } = serverData;
    const pageNumArr = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    return (
        <div className="flex items-center justify-center space-x-4 mt-6 mb-6">

            {prev && (
                <div className="px-6 py-3 bg-blue-800 text-white rounded-lg shadow-lg
                hover:bg-blue-700 transform transition-all duration-300"
                     onClick={() => moveListPage(start -1)}>
                    이전
                </div>
            )}

            {pageNumArr.map((num, idx) => (
                <div
                    key={idx}
                    className={`px-6 py-3 rounded-lg transition-all duration-300 transform ${
                        page === num
                            ? 'bg-blue-900 text-white shadow-2xl scale-110'
                            : 'bg-gray-800 text-gray-300 hover:bg-blue-600'
                            + 'hover:text-white hover:scale-110'
                    }`}
                    onClick={() => moveListPage(num)}
                    >
                    {num}
                </div>
            ))}

            {next && (
                <div className="px-6 py-3 bg-blue-800 text-white rounded-lg shadow-lg
                hover:bg-blue-700 transform transition-all duration-300"
                     onClick={() => moveListPage(end + 1)}>
                    다음
                </div>
            )}
        </div>
    );
}

export default PageComponent;
