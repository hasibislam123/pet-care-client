import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const Login = () => {
    const {SignInUser} = use(AuthContext)
    const handleLogIn = event  =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        SignInUser(email, password)
        .than(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        } )

    } 
    

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <h1 className="text-4xl font-bold text-center">Login</h1>
                <form onSubmit={handleLogIn}>
                    <fieldset className="fieldset">
                        {/* email field */}
                        <label className="label">Email</label>
                        <input  type="email" className="input border-0 border-b-1" placeholder="Email" name='email' />
                        {/* Password field */}
                        <label className="label">Password</label>
                        <input type="password" className="input border-0 border-b-1" placeholder="Password" name='password' />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 border-0  rounded-3xl bg-gradient-to-r from-[#00b4d8] via-purple-500 to-pink-500">Login</button>
                    </fieldset>
                </form>
                <p>Allready have an account ? please <Link to='/register' className='text-blue-600 underline hover:text-red-600'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;