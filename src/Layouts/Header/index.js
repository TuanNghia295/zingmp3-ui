import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Buttons from '~/Components/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as DropdownMenu } from '~/Layouts/Dropdown';
import {
    faArrowLeft,
    faArrowRight,
    faDownload,
    faGear,
    faGem,
    faSearch,
    faUser,
    faX,
    faRainbow,
    faChartLine,
    faChartBar,
    faChartSimple,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';

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

                    <form className={cx('search-container')}>
                        <HeadlessTippy
                            visible={true}
                            interactive={true}
                            placement="bottom-start"
                            render={(attrs) => (
                                <ul className={cx('search')} tabIndex="-1" {...attrs}>
                                    <DropdownMenu>
                                        <div className={cx('search-title')}>
                                            <h4>Đề xuất cho bạn</h4>
                                        </div>
                                        <div className={cx('search-result-container')}>
                                            <div className={cx('icon-result')}>
                                                <FontAwesomeIcon
                                                    icon={faChartSimple}
                                                ></FontAwesomeIcon>
                                            </div>
                                            <div className={cx('search-result')}>
                                                <p>Bí mật nhỏ</p>
                                            </div>
                                        </div>
                                    </DropdownMenu>
                                </ul>
                            )}
                        >
                            <div className={cx('search-place')}>
                                <div className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                                <input
                                    placeholder="Tìm kiếm bài hát,nghệ sĩ,lời bài hát,..."
                                    className={cx('search-body')}
                                ></input>
                                <div className={cx('closeSearch-btn')}>
                                    <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                                </div>
                            </div>
                        </HeadlessTippy>
                    </form>
                </div>
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
