'use client';
import Link from 'next/link';
import classes from '@/styles/Navbar.module.css';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Logo } from '@/components/Logo';
import { UserInfo } from './UserInfo';

const Navbar = () => {

    const pathname = usePathname();
    const { data } = useSession();

    const navItems = [
        { label: 'All Vendors', path: '/' },
        { label: 'Create Vendor', path: '/vendors/create' }
    ]

    return (
        <nav className={classes.navbar}>

            <div> <Logo fontSize={38} /> </div>

            <div className={classes.nav_items}>
                {navItems.map(({ label, path }, idx) => (
                    <Link
                        href={path}
                        key={idx}
                        className={path === pathname ? classes.active : ''}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <div>
                {data?.user && (<UserInfo user={data.user} />)}
            </div>
        </nav>
    )
}

export { Navbar }
