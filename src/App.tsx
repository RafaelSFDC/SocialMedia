import { Routes, Route } from "react-router-dom";
import "./globals.css";
import SigninForm from "./_auth/forms/SigninForm";
import { Home } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {"Public Routes"}
        <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={SigninForm />} />
            <Route path="/sign-up" element={SigninForm />} />
        </Route>
        
        {"Private Routes"}
        <Route index element={Home />} />
      </Routes>
    </main>
  );
};

export default App;
