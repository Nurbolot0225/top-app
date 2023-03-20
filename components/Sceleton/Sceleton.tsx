import styles from './Sceleton.module.css';

export const Skeleton = (): JSX.Element => {
    return (
        <>
            <div className={styles.skeleton}>
                <div className={styles.skeleton__top}>
                    <div className={styles.skeleton__TopTitle}></div>
                    <div className={styles.skeleton__TopFilter}></div>
                </div>
                <div className={styles.skeleton__header}>
                    <div className={styles.skeleton__logo}></div>
                    <div className={styles.skeleton__title}></div>
                    <div className={styles.skeleton__price}></div>
                    <div className={styles.skeleton__price}></div>
                    <div className={styles.skeleton__price}></div>
                </div>
                <div className={styles.skeleton__description}></div>
                <div className={styles.skeleton__info}>
                    <div className={styles.skeleton__document}></div>
                    <div className={styles.skeleton__document}></div>
                    <div className={styles.skeleton__advantages}></div>
                </div>
                <div className={styles.skeleton__buttons}>
                    <div className={styles.skeleton__OneButton}></div>
                    <div className={styles.skeleton__TwoButton}></div>
                </div>
            </div>
        </>
    )
}