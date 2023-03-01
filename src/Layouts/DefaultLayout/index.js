import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/Layouts/Header';
import Sidebar from '../Sidebar';
const cx = classNames.bind(styles);
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <h1 style={{ color: 'white' }}>content</h1>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
