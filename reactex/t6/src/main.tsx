import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import CountPage from "./pages/countPage.tsx";
import LoginPage from "./pages/member/loginPage.tsx";
import ListPage from "./pages/todo/listPage.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<App/>}></Route>
        <Route path={'/count'} element={<CountPage/>}></Route>
        <Route path={'/member/login'} element={<LoginPage/>}></Route>
        <Route path={'/todo/list'} element={<ListPage/>}></Route>
    </Routes>
  </BrowserRouter>,
)
