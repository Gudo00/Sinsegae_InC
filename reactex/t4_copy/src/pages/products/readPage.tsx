import ProductReadComponent from "../../components/products/readComponent.tsx";


function ProductsReadPage() {
    return (
        <div className={'mt-3 p-3 bg-blue-200 w-full h-full'}>
            <div>Product Read</div>
            <div>
                <ProductReadComponent/>
            </div>
        </div>
    );
}

export default ProductsReadPage;