import "../../../css/register-page.css";
import { Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserRegistrationModel from "../../../models/userRegistrationModel";
import CustomButton from "../../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../redux/actions/registerAction";
import { RootState } from "../../../redux";
import { Navigate } from "react-router-dom";


const Register = () => {
    const dispatch: any = useDispatch();

    const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);

    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
        },
        validationSchema: Yup.object({
            first_name: Yup.string().min(3).required("Required"),
            last_name: Yup.string().min(3).required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().min(8).required("Required"),
            confirm_password: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Required"),
        }),
        onSubmit: (values: UserRegistrationModel) => {
            dispatch(registerAction({ email: values.email, password: values.password, first_name: values.first_name }));
        }
    });

    return (
        isLoggedIn ? <Navigate to="/client" /> :
            <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="register-card">
                    <div className="register-icon">
                        <img className="icon-nafso" src="res/registeration/login-illustration.svg" />
                    </div>
                    <div className="right-section">
                        <div className="gay-part">
                            <div className="mini-bank-icon">
                                <img src="res/registeration/Mini-Bank-Logo.svg" />
                            </div>
                            <div style={{ marginLeft: "4rem", marginBottom: "4rem" }}>
                                <h1 className="kalam-big">Registration</h1>
                                <p className="kalam-small">Join Nile Delta Bank!</p>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center pl-44">
                            <form className="w-full" onSubmit={formik.handleSubmit}>
                                <div className="w-full flex flex-col items-center justify-center gap-y-6">
                                    <div className="w-3/4 flex flex-row justify-between gap-x-16">
                                        <div className="w-72">
                                            <h1 className="kalam-label">First Name</h1>
                                            <Input name="first_name" value={formik.values.first_name} onChange={formik.handleChange} status={(formik.errors.first_name) ? "error" : ""} size="large" placeholder="First name" />
                                        </div>
                                        <div className="w-72">
                                            <h1 className="kalam-label">Last Name</h1>
                                            <Input name="last_name" value={formik.values.last_name} onChange={formik.handleChange} status={(formik.errors.last_name) ? "error" : ""} size="large" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div className="w-3/4">
                                        <h1 className="kalam-label">Email</h1>
                                        <Input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} status={(formik.errors.email) ? "error" : ""} size="large" placeholder="name@example.com" />
                                    </div>
                                    <div className="w-3/4">
                                        <h1 className="kalam-label">Password</h1>
                                        <Input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} status={(formik.errors.password) ? "error" : ""} size="large" placeholder="********" />
                                    </div>
                                    <div className="w-3/4">
                                        <h1 className="kalam-label">Confirm Password</h1>
                                        <Input type="password" name="confirm_password" value={formik.values.confirm_password} onChange={formik.handleChange} status={(formik.errors.confirm_password) ? "error" : ""} size="large" placeholder="********" />
                                    </div>
                                    <CustomButton
                                        type="submit"
                                        body="Sign Up"
                                        style="w-3/4 rounded-xl p-3 h-3 bodia-gradient-register"
                                    />
                                    <div className="w-3/4 flex flex-row items-center justify-center gap-x-2">
                                        <div className="bg-black h-0.5 w-2/3" > </div>
                                        <p className="bodia-kalam">or</p>
                                        <div className="bg-black h-0.5 w-2/3" > </div>
                                    </div>
                                    <div className="bodia-border-register w-3/4 h-20 rounded-xl flex flex-row items-center justify-center gap-x-6">
                                        <img src="/res/google-icon.svg" />
                                        <p className="bodia-kalam-2-register text-black">Sign Up With Google</p>
                                    </div>
                                    <div className="w-3/4 flex flex-row justify-center">
                                        <p className="text-2xl text-black mt-9">Already have an account? Sign in
                                        <a className="text-2xl text-blue-500 underline mx-2 text-left" href="/login">here</a>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
    )
}

export default Register;