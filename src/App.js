import { BrowserRouter, Route, Routes } from "react-router-dom";
import Room from "./components/Room";
import Game from "./page/game";


function App() {

 

    return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Room/>} />
        <Route path="/game" element={<Game/>} />
       </Routes>
       </BrowserRouter>
    ); 
}

export default App;
