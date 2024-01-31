import classes from '@/styles/Loading.module.css';
import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
    return (
        <div className={classes.loading}>
            <PuffLoader color='var(--accent_color)' />
        </div>
    )
}

export { Loading }
