import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Buttons from '~/Components/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faArrowRight,
    faDownload,
    faGear,
    faGem,
    faUser,
    faRainbow,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '~/Layouts/components/Search';

const cx = classNames.bind(styles);
function Header() {
    const levelRenderIcons = [
        {
            title: 'Chủ đề',
            icons: <FontAwesomeIcon icon={faRainbow} />,
        },
        {
            title: 'Nâng cấp VIP',
            icons: <FontAwesomeIcon icon={faGem} />,
        },
        {
            title: 'Cài đặt',
            icons: <FontAwesomeIcon icon={faGear} />,
        },
    ];
    const Findmusic = `https://mp3.zing.vn/xhr/recommend?type=audio${encodeURIComponent}`;
    fetch(Findmusic)
        .then((response) => response.json())
        .then((e) => console.log(e));
    return (
        <div className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('level-left-container')}>
                    <div className={cx('next-pre-btn')}>
                        <Buttons
                            lefIcon={
                                <FontAwesomeIcon icon={faArrowLeft} className={cx('left-btn')} />
                            }
                            rightIcon={
                                <FontAwesomeIcon icon={faArrowRight} className={cx('right-btn')} />
                            }
                        />
                    </div>
                </div>
                    <Search />
                <div className={cx('level-container')}>
                    <Buttons
                        lefIcon={<FontAwesomeIcon icon={faDownload} />}
                        className={cx('download-btn')}
                    >
                        Tải bản Window
                    </Buttons>

                    {levelRenderIcons.map((item, index) => (
                        <Tippy content={item.title} key={index}>
                            <Buttons className={cx('theme')} lefIcon={item.icons}></Buttons>
                        </Tippy>
                    ))}

                    <Buttons
                        className={cx('user')}
                        lefIcon={<FontAwesomeIcon icon={faUser} />}
                    ></Buttons>
                </div>
            </div>
        </div>
    );
}

export default Header;
