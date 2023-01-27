import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<LandingPage />} />
        <Route path="/signup" element={<LandingPage />} />
        <Route path="/forgot" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
