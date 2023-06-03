import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { Input, Checkbox, notification } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserLoginModel from "../../../models/userLoginModel";
import CustomButton from "../../../components/CustomButton";
import { loginAction } from "../../../redux/actions/loginAction";
import "../../../css/login-page.css";
import { useState } from "react";

const Login = () => {
    const dispatch: any = useDispatch();

    const [userType, setUserType] = useState("/client/my-accounts");

    const { user, isLoggedIn } = useSelector((state: any) => state.auth);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().min(1).required("Required"),
        }),
        onSubmit: (values: UserLoginModel) => {
            if (values.email === "admin@admin.com" && values.password === "admin") {
                setUserType("/admin/view-reports");
            }
            else if (values.email === "client@client.com" && values.password === "client") {
                setUserType("/client/my-accounts");
            }
            else if (values.email === "banker@banker.com" && values.password === "banker") {
                setUserType("/banker/view-reports");
            }
            dispatch(loginAction({ email: values.email, password: values.password }));
        }
    });


    return (
        <>
            {
                isLoggedIn ? (
                    <Navigate to={userType} />
                ) : (
                    <>
                        <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div className="login-card">
                                <div className="login-icon">
                                    <img className="icon-nafso" src="res/registeration/login-illustration.svg" />
                                </div>
                                <div className="right-section-login">
                                    <div className="gay-part-login">
                                        <div className="mini-bank-icon-login">
                                            <img className="mr-16 " src="res/registeration/Mini-Bank-Logo.svg" />
                                        </div>
                                        <div style={{ marginLeft: "4rem", }}>
                                            <h1 className="kalam-big-login">Login</h1>
                                            <p className="kalam-small-login">Welcome back! Please enter your details</p>
                                        </div>
                                    </div>
                                    <div className="h-full w-full flex items-center justify-center">
                                        <div className="w-full h-full flex flex-col items-center justify-center pl-44">
                                            <form className="w-full" onSubmit={formik.handleSubmit}>
                                                <div className="w-full flex flex-col items-center justify-center gap-y-10">
                                                    {/* <div className="w-3/4 flex flex-row justify-between gap-x-16">
                                                    </div> */}
                                                    <div className="w-3/4">
                                                        <h1 className="kalam-label">Email</h1>
                                                        <Input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} status={(formik.errors.email) ? "error" : ""} size="large" placeholder="name@example.com" />
                                                    </div>
                                                    <div className="w-3/4">
                                                        <h1 className="kalam-label">Password</h1>
                                                        <Input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} status={(formik.errors.password) ? "error" : ""} size="large" placeholder="********" />
                                                    </div>
                                                    <div className="w-3/4 flex flex-row justify-between">
                                                        <div className="w-3/4 flex flex-row justify-start items-center">
                                                            <Checkbox className="text-2xl text-black" />
                                                            <p className="remeber-me-text text-2xl text-black ml-2">Remember me
                                                            </p>
                                                        </div>
                                                        <a className="forgot-password text-2xl underline mx-2 text-left" href="/login">Forgot Password</a>
                                                    </div>
                                                    <CustomButton
                                                        type="submit"
                                                        body="Sign in"
                                                        style="w-3/4 rounded-xl joe-gradient"
                                                    />
                                                    <div className="w-3/4 flex flex-row items-center justify-center gap-x-2">
                                                        <div className="bg-black h-0.5 w-2/3" > </div>
                                                        <p className="bodia-kalam-login">or</p>
                                                        <div className="bg-black h-0.5 w-2/3 " > </div>
                                                    </div>
                                                    <div className="bodia-border-login w-3/4 h-20 rounded-xl flex flex-row items-center justify-center gap-x-6">
                                                        <img src="/res/google-icon.svg" />
                                                        <p className="bodia-kalam-2-login text-black">Sign In With Google</p>
                                                    </div>
                                                    <div className="w-3/4 flex flex-row justify-center">
                                                        <p className="text-2xl text-black">Don't have an account? Sign up
                                                        </p>
                                                        <a className="text-2xl text-blue-500 underline mx-2 text-left" href="/register">here</a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </>
                )
            }
        </>
    )
}

export default Login;