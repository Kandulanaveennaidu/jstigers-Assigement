'use client';
import classes from '@/styles/UserInfo.module.css';
import { useState } from "react";
import { signOut } from 'next-auth/react';
import { RiArrowDownSLine } from "react-icons/ri";

const UserInfo = ({ user }) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={classes.user_info} onClick={() => setOpen((prev) => !prev)}>
                <img src={user.image} alt={user.name} className={classes.avatar} />
                <h2> {user.name} </h2>
                <RiArrowDownSLine />
            </div>

            {isOpen && (
                <div className={classes.modal_wrapper} onClick={() => setOpen(false)}>
                    <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
                        <img src={user.image} alt={user.name} className={classes.avatar} />
                        <h1> {user.name} </h1>
                        <p> {user.email} </p>

                        <button onClick={signOut}> Logout </button>
                    </div>
                </div>
            )}

        </>
    )
}

export { UserInfo }
