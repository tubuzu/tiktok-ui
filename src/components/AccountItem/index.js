import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss'

function AccountItem() {
    return (
        <div className={styles.wrapper}>
            <img className={styles.avatar} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/40965bae2034ceee64594826618b0be5~c5_100x100.jpeg?x-expires=1653638400&x-signature=nbn%2BvDGwcgX5Lx8QCaZY3ICTyIk%3D" alt="" />
            <div className={styles.info}>
                <h4 className={styles.name}>
                    <span>Nguyen Pham Anh Tu</span>
                    <FontAwesomeIcon className={styles.check} icon={faCheckCircle} />
                </h4>
                <span className={styles.username}>npatu</span>
            </div>
        </div>
    );
}

export default AccountItem;