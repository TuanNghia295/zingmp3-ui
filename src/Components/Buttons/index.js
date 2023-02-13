import classNames from 'classnames/bind';
import styles from './Buttons.module.scss';
const cx = classNames.bind(styles);

function Buttons({ to, href, primary = false,golden=false, children, onClick, className,...remainProps }) {
    const Component = 'button';
    const props = {
        onClick,
        ...remainProps,
    };

    const classes = cx('wrapper', {
        primary,
        golden,
        [className]: className,
    });
    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
}

export default Buttons;
