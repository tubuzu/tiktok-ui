
// import classNames from 'classnames';
import styles from './Sidebar.module.scss'

// const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={styles.wrapper}>
        <h2>Sidebar</h2>
    </aside>;
}

export default Sidebar;