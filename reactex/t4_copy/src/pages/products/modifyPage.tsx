import ModifyComponent from "../../components/products/modifyComponent.tsx";

function ProductModifyPage() {
    return (
        <div className={'mt-3 p-3 bg-blue-200 w-full h-full'}>
            <div>Product Modify</div>
            <div>
                <ModifyComponent></ModifyComponent>
            </div>
        </div>
    );
}

export default ProductModifyPage;