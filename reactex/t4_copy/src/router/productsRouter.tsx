import {Navigate, Route} from "react-router";
import ProductIndexPage from "../pages/products/indexPage.tsx";
import {lazy, Suspense} from "react";

const Loading = <div>Loading..............</div>

const ProductsList = lazy(() =>
    import('../pages/products/listPage.tsx'))

const ProductsRead = lazy(() =>
    import('../pages/products/readPage.tsx'))

const ProductsAdd = lazy(() =>
    import('../pages/products/addPage.tsx'))

const ProductsModify = lazy(() =>
    import('../pages/products/modifyPage.tsx'))

export default function productsRouter() {


    return (
        <Route path='/products' element={<ProductIndexPage/>}>

            <Route index element={<Navigate to={'list'} replace />}></Route>

            <Route path='list'
                   element={<Suspense fallback={Loading}><ProductsList/></Suspense>}></Route>

            <Route path='add'
                   element={<Suspense fallback={Loading}><ProductsAdd/></Suspense>}></Route>

            <Route path='read/:pno'
                   element={<Suspense fallback={Loading}><ProductsRead/></Suspense>}></Route>

            <Route path='modify/:pno'
                   element={<Suspense fallback={Loading}><ProductsModify/></Suspense>}></Route>
        </Route>
    )

}