import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//npm install -D tailwindcss postcss autoprefixer
//npx tailwind init -p
createRoot(document.getElementById('root')!).render(
    <App />
)
