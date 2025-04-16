import {type RouteConfig, index, route} from "@react-router/dev/routes";
import {lazy} from "react";

const TodoAdd = lazy(() => import("./routes/todo/addPage"));

export default [
    index("routes/home.tsx"),
    route('/about','routes/about.tsx'),
    route("/todo", "layout/todoLayout.tsx", [
        route("list",'routes/todo/listPage.tsx'),
        route("add",'routes/todo/addPage.tsx')
    ]),
    route('/member/login', 'routes/member/loginPage.tsx'),
    route('/member/kakao', 'routes/member/kakaoRedirect.tsx'),


] satisfies RouteConfig;