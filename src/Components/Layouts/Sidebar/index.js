import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartArea,
    faChartLine,
    faCompactDisc,
    faPager,
    faPlay,
    faRadio,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const sideBarContents = [
    {
        title: 'Cá Nhân',
        icons: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
    },
    {
        title: 'Khám Phá',
        icons: <FontAwesomeIcon icon={faCompactDisc}></FontAwesomeIcon>,
    },
    {
        title: '#Zingchart',
        icons: <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>,
        play: <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>,
    },
    {
        title: 'Radio',
        icons: <FontAwesomeIcon icon={faRadio}></FontAwesomeIcon>,
        play: <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>,
    },
    {
        title: 'Theo Dõi',
        icons: <FontAwesomeIcon icon={faPager}></FontAwesomeIcon>,
    },
];
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-container')}>
                <button className={cx('logo')}></button>
            </div>
            <div className={cx('sidebar-content')}>
                <ul className={cx('sidebar-list')}>
                    {sideBarContents.map((item, index) => {
                        return (
                            <li className={cx('sidbar-item')} key={index}>
                                <a title={item.title}>
                                    <i className={cx('icon')}>{item.icons}</i>
                                    {item.title}
                                    <i className={cx('play-icon')}>{item.play}</i>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
