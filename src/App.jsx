import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RegexItemPage from './pages/RegexItemPage'
import Page404 from './pages/404'
function App() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="expr">
                    <Route path=":exprid" element={<RegexItemPage />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    )
}
export default App
