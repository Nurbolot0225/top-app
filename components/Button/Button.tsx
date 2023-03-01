import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ( { apperance, children }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, {
                [styles.primary]: apperance == 'primary',
                [styles.ghost]: apperance == 'ghost',
            })}
        >
            {children}
        </button>
    );
};