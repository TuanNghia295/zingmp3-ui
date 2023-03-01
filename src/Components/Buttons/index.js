import classNames from 'classnames/bind';
import styles from './Buttons.module.scss';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);

const Buttons = forwardRef(
    (
        {
            to,
            href,
            primary = false,
            golden = false,
            children,
            className,
            lefIcon,
            rightIcon,
            onClick,
            ...remainProps
        },
        ref,
    ) => {
        const Component = 'button';
        const props = {
            onClick,
            ...remainProps,
        };

        const classes = cx('wrapper', {
            primary,
            golden,
            lefIcon,
            rightIcon,
            [className]: className,
        });
        return (
            <Component className={classes} ref={ref} {...props}>
                {lefIcon && <span className={cx('icon')}>{lefIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Component>
        );
    },
);

export default Buttons;
