import { Link, Outlet } from "react-router";
import {useCountStore} from "~/store/useCountStore";

export default function TodoLayout() {

    const { count } = useCountStore()

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">📝 Todo App</h1>
                    <div className={'text-2xl bg-amber-600'}>COUNT {count}</div>
                    <nav className="flex gap-4">
                        <Link
                            to="/todo/list"
                            className={`px-3 py-2 rounded-lg text-sm font-medium `}
                        >
                            📋 Todo List
                        </Link>
                        <Link
                            to="/todo/add"
                            className={`px-3 py-2 rounded-lg text-sm font-medium `}
                        >
                            ➕ Add Todo
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-6">
                <Outlet />
            </main>
        </div>
    );
}
