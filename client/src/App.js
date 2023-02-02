import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // const protect = (component) => access ? <DashboardPage /> : <LandingPage />;
  const protect = async (component) => {
    const access = await sessionStorage.getItem('authToken');
    return access ? <DashboardPage /> : <Navigate to='/' />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={ protect(<DashboardPage />) } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
