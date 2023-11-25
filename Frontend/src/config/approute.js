import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../screens/forms/signup";

import Dashboard from "../screens/dashboard";
import Login from "../screens/forms/login";
import SignUp from "../components/signup_component";
import SignIn from "../components/login_component";

function AppRoute() {
    const isLoggedIn = window.localStorage.getItem("LoggedIn");
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="signup" element={<SignUp/>}/>
                    <Route path="login" element={<SignIn/>}/>
                    <Route path="/*" element={isLoggedIn === "true" ? <Dashboard/>: <SignIn/>}/>
                </Routes>
            </BrowserRouter >
        </>
    )
}

export default AppRoute;





{/* <Route path="/*" element={<Dashboard/>}/> */}
{/* <Route path="/*" element={isLoggedIn === "true" ? <Dashboard/>: <SignIn/>}/> */}