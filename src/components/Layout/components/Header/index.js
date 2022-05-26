import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

import styles from './Header.module.scss'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button'

// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {

    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return <header className={styles.wrapper}>
        <div className={styles.inner}>
            <div className={styles.logo}>
                <img src={images.logo} alt="tiktok"></img>
            </div>

            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={styles["search-result"]} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={styles["search-title"]}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={styles.search}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={styles.clear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={styles.loading} icon={faSpinner} />

                    <button className={styles["search-btn"]}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>

            <div className={styles.actions}>
                <Button text>Upload</Button>
                <Button primary>Log in</Button>

                <Menu items={MENU_ITEMS}>
                    <button className={styles['more-btn']}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
            </div>
        </div>
    </header>;
}

export default Header;