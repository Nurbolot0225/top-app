import { AdvanatgesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import cn from 'classnames';
import CheckIcon from './check.svg';

export const Advantages = ({ advantages }: AdvanatgesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <CheckIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vlline} />
                    <div>{a.description}</div>
                </div>
            ))} 
        </>
    );
};