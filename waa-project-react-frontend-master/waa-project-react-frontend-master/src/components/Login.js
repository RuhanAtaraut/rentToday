import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import FetchService from "../service/FetchService";
import extractJwtPayload from "../util/extractJwtPayload";

const Login = ({ setCurrentUser }) => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email.current.value)
            alert("Please enter email");
        else if (!password.current.value)
            alert("Please enter password");
        else
            FetchService.login(email.current.value, password.current.value)
                .then(response => {
                    const payload = extractJwtPayload(response.data.accessToken);

                    const currentUser = {
                        email: payload.sub,
                        accessToken: response.data.accessToken,
                        roles: payload.roles
                    };
                    setCurrentUser(currentUser);
                    console.log(payload);

                    sessionStorage.setItem('user', JSON.stringify(currentUser));

                    navigate('/');
                }).catch((e) => {
                    console.log(e);
                    alert("Invalid email/password");
                });
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <main className="login-content flex-grow flex items-center justify-center">
                <div className="form login-form mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" ref={email}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password"
                            ref={password}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <button className="btn btn-primary w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleLogin}>Login</button>
                </div>
            </main>
        </div>
    );
}

export default Login;
