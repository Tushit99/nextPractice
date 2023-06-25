import {MantineProvider, Text} from "@mantine/core"
import './App.css';
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/auth" element={<Auth />} /> 
        </Routes>
      </MantineProvider>
    </div>
  );
}

export default App;
