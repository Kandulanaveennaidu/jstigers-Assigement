'use client';
import classes from '@/styles/Searchbar.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";


const Searchbar = ({ params }) => {

    const { push } = useRouter();
    const [query, setQuery] = useState('');

    const onSearch = () => {
        if (!query) return;
        push(`/?q=${query}`);
    }

    const onKeyPress = (event) => {

        if (!query) {
            push('/');
        }

        if (event.key !== 'Enter') return;
        onSearch()
    }

    return (
        <div className={classes.searchbar}>
            <input
                type="text"
                placeholder='Search Bank, Country, City, Address lines'
                onKeyDown={onKeyPress}
                value={query} onChange={({ target }) => setQuery(target.value)}
            />
            <CiSearch fontSize={26} opacity={'70%'} cursor={'pointer'} onClick={onSearch} />
        </div>
    )
}

export { Searchbar }
