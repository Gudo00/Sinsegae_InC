
import { createRoot } from 'react-dom/client'
import './index.css'

import {BrowserRouter,  Routes} from "react-router";
import rootRouter from "./router/root.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
          {...rootRouter()}
      </Routes>
  </BrowserRouter>,
)

