import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as DropdownMenu } from '~/Components/Dropdown';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItems from '~/Components/AccountItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showSearchMenu, setShowSearchMenu] = useState(false);
    const inputRef = useRef();
    const inputStyle = {
    };
    const handleInput = (input) => {
        return setSearchValue(input.target.value);
    };
    const handleClear = () => {
        setSearchValue('');
        // setShowSearchMenu([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowSearchMenu(false);
    };
    return (
        <div className={cx('search-container')}>
            <HeadlessTippy
                interactive={true}
                visible={showSearchMenu}
                onClickOutside={handleHideResult}
                placement="bottom-start"
                render={(attrs) => (
                    <ul className={cx('search')} tabIndex="-1" {...attrs}>
                        <DropdownMenu>
                            <div className={cx('search-title')}>
                                <h4>Đề xuất cho bạn</h4>
                            </div>
                            <AccountItems />
                        </DropdownMenu>
                    </ul>
                )}
            >
                <div className={cx('search-place')}>
                    <div className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm bài hát,nghệ sĩ,lời bài hát,..."
                        className={cx('search-body')}
                        onChange={handleInput}
                        onClick={() => {
                            setShowSearchMenu(true);
                        }}
                    />
                    {!!searchValue && (
                        <button className={cx('closeSearch-btn')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                        </button>
                    )}
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
