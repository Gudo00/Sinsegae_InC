// Props
interface PageComponentProps<T> {
    serverData: PageResponse<T>;
    moveListPage: (page:number) => void;
}

function PageComponent({ serverData, moveListPage }: PageComponentProps<unknown>) {
    const { page, prev, next, start, end } = serverData;

    const pageNumArr = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    return (
        <div className="flex flex-wrap items-center justify-center space-x-2
                mt-6 mb-6 p-4 max-w-xl mx-auto bg-black rounded-lg">
            {prev && (
                <div className="px-4 py-2 bg-blue-800 text-white rounded-lg shadow-lg
            hover:bg-blue-700 transition-all duration-300 cursor-pointer"
                     onClick={() => moveListPage(start - 1)}>
                    이전
                </div>
            )}

            {pageNumArr.map((num, idx) => (
                <div
                    key={idx}
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300
                ${page === num
                        ? 'bg-blue-900 text-white shadow-lg scale-110'
                        : 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white hover:scale-110'}
            `}
                    onClick={() => moveListPage(num)}
                >
                    {num}
                </div>
            ))}

            {next && (
                <div className="px-4 py-2 bg-blue-800 text-white rounded-lg shadow-lg
            hover:bg-blue-700 transition-all duration-300 cursor-pointer"
                     onClick={() => moveListPage(end + 1)}>
                    다음
                </div>
            )}
        </div>
    );
}

export default PageComponent;
