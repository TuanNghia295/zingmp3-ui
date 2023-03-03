import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-result-container')}>
                <div className={cx('icon-result')}>
                    <FontAwesomeIcon icon={faChartSimple}></FontAwesomeIcon>
                </div>
                <div className={cx('search-result')}>
                    <p>Bí mật nhỏ</p>
                </div>
            </div>
        </div>
    );
}

export default AccountItems;
