import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Preferences from "./pages/Preferences";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/preferencias" element={<Preferences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
