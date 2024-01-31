import Link from 'next/link';
import classes from '@/styles/Controller.module.css';
import { revalidatePath } from 'next/cache';
import { Searchbar } from './Searchbar';
import { GrRefresh } from "react-icons/gr";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Controller = ({ title, page, pageEnd, params }) => {

    const refresh = async () => {
        'use server';
        revalidatePath('/');
    }

    return (
        <div className={classes.controller}>
            {title && (
                <h1> {title} </h1>
            )}

            <div className={classes.actionbar}>

                <Searchbar params={params} />

                <div className={classes.pagenation}>
                    <Link
                        className={page === 1 ? classes.disabled : ''}
                        href={{ pathname: '/', query: { ...params, page: page - 1 } }}
                    >
                        <MdKeyboardArrowLeft fontSize={26} />
                    </Link>

                    <p> {page} of {pageEnd} </p>

                    <Link
                        className={page === pageEnd ? classes.disabled : ''}
                        href={{ pathname: '/', query: { ...params, page: page + 1 } }}
                    >
                        <MdKeyboardArrowRight fontSize={26} />
                    </Link>

                </div>

                <form action={refresh} >
                    <button type='submit' >
                        <GrRefresh fontSize={26} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export { Controller }
