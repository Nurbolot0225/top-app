import { ReviewProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import CloseIcon from './close.svg';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { IReviewForm } from './ReviewForm.interface';
import { useForm } from 'react-hook-form';


export const ReviewForm = ({ productId, className, ...props }: ReviewProps): JSX.Element => {

    const {register, control, handleSubmit, } = useForm<IReviewForm>();

    return (
        <>
            <div className={cn(styles.reviewForm, className)} 
                {...props}
                > 
                <Input placeholder='Имя' /> 
                <Input placeholder='Заголовок отзыва' className={styles.title} /> 
                <div className={styles.rating}>
                        <span>Оценка:</span>
                        <Rating rating={0} />
                </div>
                <Textarea placeholder='Текст отзыва' className={styles.description} />
                <div className={styles.submit}>
                        <Button apperance='primary'>Отправить</Button>         
                        <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>         
                </div>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен 😍</div>
                <div>
                    Спасибо, ваш отзыв будет опубликован после проверка.
                </div>
                <CloseIcon className={styles.close} />
            </div>
        </>
        
    );
};