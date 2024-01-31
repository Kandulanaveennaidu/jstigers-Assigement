'use client';
import classes from '@/styles/Login.module.css';
import { signIn } from "next-auth/react";
import { toast } from 'react-hot-toast';

import { Logo } from '@/components/Logo';

const Login = () => {

    const onLogin = async (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            let response = await signIn('credentials', {
                redirect: false,
                email: formData.get('email'),
                password: formData.get('password')
            })

            if (response.error) {
                toast.error(response.error);
            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className={classes.login}>

            <div>
                <Logo />
                <h1> Welcome Back </h1>
                <h1> Master </h1>
            </div>

            <div>
                <div className={classes.heading}>
                    <h1> Login to proceed </h1>
                </div>

                <form onSubmit={onLogin}>
                    <input name="email" type="email" placeholder='Email' />
                    <input name="password" type="current-password" placeholder='Password' />
                    <button type='submit'> Login </button>
                </form>

                <div className={classes.devider}>
                    <p> or </p>
                </div>

                <form action={async () => signIn('google')}>
                    <button type='submit' className={classes.google_button} >
                        <img src={'/google.svg'} alt="google" />
                        <p> Signin </p>
                    </button>
                </form>
            </div>
        </div>
    )
}

export { Login }
