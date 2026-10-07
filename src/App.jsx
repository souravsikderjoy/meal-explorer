import{Routes, Route} from "react-router-dom";


import Home from "./Pages/Home";
import Foods from "./Pages/Foods"
import Recipe from "./Pages/Recipe";

function App(){
    return(<div>
        <h1>Home</h1>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foods/:category" element={<Foods />} />
            <Route path="/recipe/:id" element={<Recipe/>} />
        </Routes>
    </div>)
}

export default App;