import Tippy from "@tippyjs/react/headless";
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper'

function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className={styles["menu-list"]} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={styles['menu-popper']}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;