import {ButtonProps} from './Button.props'
import styles from './Button.module.css'
import cn from 'classnames'

export const Button = ({appearance, children, className, arrow = 'none', ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })}
                {...props}
        >
            {children}
            {arrow != 'none' &&<span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
            </span>}
        </button>

    )
}