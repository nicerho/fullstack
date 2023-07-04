import "./TodoApp.css";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodosComponent from "./ListtodoComponent";
import WelcomeComponent from "./WelcomeComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import LogoutComponent from "./LogoutComponent";
import ErrorComponent from "./ErrorComponent";

function AuthenticatedRouce({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
}
export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRouce>
                  <WelcomeComponent />
                </AuthenticatedRouce>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthenticatedRouce>
                  <ListTodosComponent />
                </AuthenticatedRouce>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRouce>
                  <LogoutComponent />
                </AuthenticatedRouce>
              }
            />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
