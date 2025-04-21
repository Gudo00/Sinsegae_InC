

import React from 'react';
import Link from "next/link";


export default function TodoLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="p-6">
            <nav className="mb-4 flex gap-4 border-b pb-2">
                <Link href="/todo/list" className="text-blue-600 hover:underline">
                    📋 Todo List
                </Link>
                <Link href="/todo/add" className="text-blue-600 hover:underline">
                    ➕ Add Todo
                </Link>
            </nav>
            <main>{children}</main>
        </div>
    );
}
