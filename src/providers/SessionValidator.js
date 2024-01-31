'use client';
import { useSession } from "next-auth/react";
import { Login } from "@/components/Login";
import { Navbar } from "@/components/Navbar";
import { Loading } from "@/components/Loading";

const SessionValidator = ({ children }) => {

    const { data, status } = useSession();

    if (data?.user) {
        return (
            <>
                <Navbar />
                {children}
            </>
        )
    }

    if (status === 'loading') {
        return <Loading />
    }

    return <Login />
}

export { SessionValidator }
