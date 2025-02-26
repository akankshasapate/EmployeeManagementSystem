import React, { useState } from 'react';

const Login = ({handleLogin}) => {

    // console.log(handleLogin)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail("");
        setPassword("");
    };

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-black'>
            <div className="border-2 border-emerald-600 rounded-xl p-20">
                <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="text-white border-2 border-emerald-600 rounded-full py-3 px-5 outline-none bg-transparent w-full placeholder:text-gray-400"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="text-white border-2 border-emerald-600 rounded-full py-3 px-5 outline-none bg-transparent w-full placeholder:text-gray-400 mt-3"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <button className="mt-5 border-2 border-emerald-600 bg-emerald-600 rounded-full py-3 px-5 text-white outline-none cursor-pointer">
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
