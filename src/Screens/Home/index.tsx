import Login from "../Auth/Login";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";

const HomePage = () => {
    const dispatch = useDispatch();

    const { user, isLoggedIn } = useSelector((state: any) => state.auth);

    const handleLogout = () => {
    }

    return (
        <>
            {
                isLoggedIn ? (
                    <> 
                        <h1>Hello {user.email}</h1>
                        <button className="bg-red-400 p-2" onClick={handleLogout}>log out</button>
                    </>
                ): (
                    <Navigate to="/login" />
                )
            }
        </>
    )
}

export default HomePage;