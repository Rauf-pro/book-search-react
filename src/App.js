import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./App.css";
import { AppProvider } from "./context/context";

function App() {
  return (
    <>
    <AppProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
      
    </>
  );
}

export default App;
