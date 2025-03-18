import CustomLayout from "../../layouts/customLayout.tsx";
import {NavLink, Outlet} from "react-router";

function TodoIndexPage() {
    return (
        <CustomLayout>
            <div className="flex gap-4 p-4">
                <div className="flex-1 bg-gray-300 p-4 shadow rounded bold">
                    <NavLink to={'/todo/list'}>LIST</NavLink>
                </div>
                <div className="flex-1 bg-gray-300 p-4 shadow rounded bold ">
                    <NavLink to={'/todo/add'}>ADD</NavLink>
                </div>
            </div>
            <div className="flex flex-box">
                <Outlet></Outlet>
            </div>
        </CustomLayout>
    );
}

export default TodoIndexPage;