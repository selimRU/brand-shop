import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../AuthProvider/AuthProvider";
import { AiOutlineGoogle } from 'react-icons/ai';
import { toast } from "react-toastify";



const LogIn = () => {
    const { googleLogin,logIn } = useContext(Context)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    // google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => res.user)
    }

    // password login
    const handleLogIn = (e) => {
        e.preventDefault()
        logIn(email, password)
            .then((res) => {
                const user = res.user
                toast.success("You have logged in successfully", {
                    position: toast.POSITION.TOP_CENTER
                });
                navigate(location?.state ? location.state : '/')
                e.target.reset()

            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-300 max-w-4xl mx-auto my-10">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogIn} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
            <p className="text-center mt-5">New here? please <Link to='/signIn'><span className=" text-blue-700 underline ml-6  font-semibold">SignIn</span></Link></p>
            <div className=' flex justify-center py-5'>
                <button onClick={handleGoogleLogin} className=' btn btn-outline text-center hover:bg-yellow-400'><span className=' text-xl text-blue-400'><AiOutlineGoogle /></span> Join With Google</button>
            </div>
        </div>
    );
};

export default LogIn;