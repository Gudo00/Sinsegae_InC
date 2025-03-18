import {Outlet} from "react-router";

function ProductIndexPage() {
    return (
        <div>
            <div>Product Index Page</div>
            <div>
                Products Sub Menu
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default ProductIndexPage;

