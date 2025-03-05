import CustomLayout from "../../layouts/customLayout.tsx";
import { Outlet } from "react-router";

const TodoIndexPage = () => {
    return (
        <CustomLayout>
            {/* 전체 컨테이너 */}
            <div className="min-h-screen p-8 flex flex-col items-center gap-6">
                {/* 버튼 컨테이너 */}
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg hover:bg-gray-700">
                        📋 LIST
                    </button>
                    <button className="px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg hover:bg-gray-700">
                        📝 ADD
                    </button>
                </div>

                {/* Outlet 부분 */}
                <div className="w-full max-w-4xl">
                    <Outlet />
                </div>
            </div>
        </CustomLayout>
    );
};

export default TodoIndexPage;
