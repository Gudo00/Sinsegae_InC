import {Route} from "react-router";
import {lazy, Suspense} from "react";
import productsRouter from "./productsRouter.tsx";

// import todoRouter from "./todoRouter.tsx";

const Loading = <div>Loading..............</div>

const Main =
    lazy(() => import("../pages/mainPage"))

const About =
    lazy(() => import("../pages/aboutPage"))


export default function rootRouter() {

    return [
        <Route path={'/'} element={ <Suspense fallback={Loading}><Main/></Suspense> } ></Route>,
        <Route path={'/about'} element={ <Suspense fallback={Loading}><About/></Suspense> } ></Route>,
        //todoRouter(),
        productsRouter()
    ]

}