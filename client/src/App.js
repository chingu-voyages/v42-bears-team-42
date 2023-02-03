import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={ <ProtectedRoutes /> } >
          <Route path="/dashboard" element={ <DashboardPage /> } />
          <Route path="/resetpassword/:resetToken" element={ <ResetPassword resetToken='resetToken' /> }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
