import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartLine,
    faCompactDisc,
    faList,
    faMusic,
    faPager,
    faPlay,
    faRadio,
    faTv,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Buttons from '~/Components/Buttons';
import { Usericon, Discovery, Follow, Radio, Chart, Types, MV } from '~/Components/icons';
const cx = classNames.bind(styles);
const sideBarContents = [
    {
        title: 'Cá Nhân',
        icons: <Usericon />,
    },
    {
        title: 'Khám Phá',
        icons: <Discovery />,
    },
    {
        title: '#Zingchart',
        icons: <Chart />,
        play: <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>,
    },
    {
        title: 'Radio',
        icons: <Radio />,
        play: <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>,
    },
    {
        title: 'Theo Dõi',
        icons: <Follow />,
    },
];

const trendings = [
    {
        title: 'Nhạc Mới',
        icons: <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>,
        play: <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>,
    },
    {
        title: 'Thể Loại',
        icons: <Types />,
    },
    {
        title: 'Top 100',
        icons: <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>,
    },
    {
        title: 'MV',
        icons: <MV />,
    },
];

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-container')}>
                <button className={cx('logo')}></button>
            </div>
            <div className={cx('sidebar-content')}>
                <div className={cx('sidebar-container')}>
                    <ul className={cx('sidebar-list')}>
                        {sideBarContents.map((item, index) => {
                            return (
                                <li className={cx('sidbar-item')} key={index}>
                                    <a href="" title={item.title}>
                                        <i className={cx('icon')}>{item.icons}</i>
                                        {item.title}
                                        <i className={cx('play-icon')}>{item.play}</i>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className={cx('sidebar-trending-container')}>
                    <ul className={cx('trending-list')}>
                        {trendings.map((trending, index) => {
                            return (
                                <li className={cx('trending-item')} key={index}>
                                    <a href="" title={trending.title}>
                                        <i className={cx('icon')}>{trending.icons}</i>
                                        {trending.title}
                                        <i className={cx('play-icon')}>{trending.play}</i>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className={cx('login-vip-container')}>
                    <div className={cx('login-container')}>
                        <div className={cx('Login')}>
                            <h5 className={cx('title')}>
                                Đăng nhập để khám phá playlist dành riêng cho bạn
                            </h5>
                            <Buttons primary>Đăng Nhập</Buttons>
                        </div>

                        <div className={cx('Vip')}>
                            <h5 className={cx('title')}>
                                Nghe nhạc không quảng cáo cùng kho nhạc VIP{' '}
                            </h5>
                            <Buttons golden>Nâng Cấp VIP</Buttons>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
