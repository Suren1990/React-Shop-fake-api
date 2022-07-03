import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <div className={styles.header}>
            <NavLink to='/' className={({ isActive }) => (isActive ? styles.header__active : styles.header__link)}>Home</NavLink>
            <NavLink to='products' className={({ isActive }) => (isActive ? styles.header__active : styles.header__link)}>Products</NavLink>
        </div>
     );
}
 
export default Header;
