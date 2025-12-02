// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
// import { auth } from '../Firebase/Firebase.init';

const Register = () => {
    const { createUser } = use(AuthContext)
    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value

        createUser(email, password)
        .then(result => {
            console.log(result)
        }) 
        .catch(error => {
            console.log(error)
        })
    }
    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     const name = event.target.name.value;
    //     const email= event.target.email.value;
    //     const password = event.target.password.value;
    //     console.log(name,email, password)

    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result => {
    //         console.log(result)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <h1 className="text-4xl font-bold">Please Register</h1>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" name='name' />
                        {/* email field */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' />
                        {/* Password field */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 border-0  rounded-3xl bg-gradient-to-r from-[#00b4d8] via-purple-500 to-pink-500">Register</button>
                    </fieldset>
                </form>
                <p>Allready have an account ? please <Link to='/login' className='text-blue-600 underline hover:text-red-600'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;