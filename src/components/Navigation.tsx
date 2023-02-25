import { Link, Outlet, useMatch } from 'react-router-dom';
import styles from '../styles/navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navPosition}>
      <div className={styles.navigation}>
        <p>
          <Link
            to='/'
            className={`${
              useMatch({
                path: '/',
                end: true,
              })
                ? styles.activeLink
                : styles.link
            }`}
          >
            Home
          </Link>
        </p>
        <p>
          <Link
            to='/form'
            className={`${
              useMatch({
                path: '/form',
                end: true,
              })
                ? styles.activeLink
                : styles.link
            }`}
          >
            フォームサンプル
          </Link>
        </p>
        <p>
          <Link
            to='/counter'
            className={`${
              useMatch({
                path: '/counter',
                end: true,
              })
                ? styles.activeLink
                : styles.link
            }`}
          >
            カウンターサンプル
          </Link>
        </p>
      </div>

      <Outlet />
    </div>
  );
};

export default Navigation;
