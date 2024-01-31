import classes from '@/styles/Alert.module.css';

const Alert = ({ isOpen, onClose, onProceed, isLoading }) => {

    const close = () => {
        if (isLoading) return;
        onClose();
    }

    return isOpen && (
        <div className={classes.alert_wrapper} onClick={close}>
            <div className={classes.content} onClick={(e) => e.stopPropagation()}>
                <div className={classes.header}>
                    <h2> Delete </h2>
                </div>

                <div className={classes.body}>
                    Are you sure? You can't undo this action afterwards.
                </div>

                <div className={classes.footer}>
                    <button onClick={close}> Cancel </button>
                    <button onClick={onProceed}> {isLoading ? 'Deleting...' : 'Continue'} </button>
                </div>
            </div>
        </div>
    )
}

export { Alert }
