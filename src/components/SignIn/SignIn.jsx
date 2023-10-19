import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../AuthProvider/AuthProvider';


const SignIn = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [error, setError] = useState('')
    const { createUser } = useContext(Context)


    const handleSignIn = (e) => {
        e.preventDefault()
        setError('')

        if (password.length < 6) {
            setError('The password is less than 6 characters')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError("The password don't have a capital letter")
            return
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setError("The password don't have a special character")
            return
        }
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                profileUpdate(name, photo)
                profileUpdate(name, photo)
                    .then(() => {
                        toast.success("You have created user successfully", {
                            position: toast.POSITION.TOP_CENTER
                        });

                    })
                e.target.reset()
                window.location.reload()
            })
            .catch(error => error.message)
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-300 max-w-4xl mx-auto my-10">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                <form onSubmit={handleSignIn} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                name="name"
                                type="text"
                                placeholder='Your name'
                                required
                                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Photo
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setPhoto(e.target.value)}
                                id="photo"
                                name="photo"
                                type="text"
                                placeholder='Your photo'
                                required
                                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
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
                                placeholder='Your email'
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                placeholder='Your password'
                                required
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className=' text-sm text-red-600 mt-4'>{error}</p>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
            <p className='text-center mt-5'>Already have an account? please <Link to='/login'><span className=" text-blue-700 underline ml-6 font-semibold">LogIn</span></Link></p>
        </div>
    );
};

export default SignIn;