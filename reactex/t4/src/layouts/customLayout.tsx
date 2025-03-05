import {ReactNode, useState} from "react";
import CustomSidebar from "./customSidebar.tsx";


interface CustomLayoutProps {
    children: ReactNode[] | ReactNode
}


function CustomLayout({children}: CustomLayoutProps) {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="flex h-screen bg-gray-100">
            <CustomSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow p-4 flex justify-between">
                    <button className="lg:hidden" onClick={toggleSidebar}>
                        ☰
                    </button>
                    <h1 className="text-xl font-bold">Admin Dashboard</h1>
                </header>
                <main className="p-4 overflow-auto">
                    <div className="bg-white p-4 shadow rounded">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default CustomLayout;