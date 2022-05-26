// import classNames from 'classnames';
import styles from './DefaultLayout.module.scss'
import Header from '~/components/Layout/components/Header'
import Sidebar from './Sidebar'

// const cx = classNames.bind(styles)

function Defaultlayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Defaultlayout;