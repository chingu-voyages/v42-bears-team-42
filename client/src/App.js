import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={ <ProtectedRoutes /> } >
          <Route path="/dashboard" element={ <DashboardPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
