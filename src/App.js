import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import MovieDetails from "./MovieDetails"

function App() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:title" element={<MovieDetails/>}/>
        </Routes>
    )
}

export default App