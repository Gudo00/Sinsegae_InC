import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import CountPage from "./pages/countPage.tsx";
import LoginPage from "./pages/member/loginPage.tsx";
import ListPage from "./pages/todo/listPage.tsx";
import KioskPage from "./pages/kioskPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import AddPage from "./pages/todo/addPage.tsx";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}></Route>
                <Route path={'/count'} element={<CountPage/>}></Route>
                <Route path={'/member/login'} element={<LoginPage/>}></Route>
                <Route path={'/todo/list'} element={<ListPage/>}></Route>
                <Route path={'/todo/add'} element={<AddPage/>}></Route>
                <Route path={'/kiosk'} element={<KioskPage/>}></Route>
            </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
    ,
)