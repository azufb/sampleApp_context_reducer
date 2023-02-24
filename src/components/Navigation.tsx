import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navPosition}>
      <div>
        <p>
          <Link to='/' className={styles.link}>
            Home
          </Link>
        </p>
        <p>
          <Link to='/form' className={styles.link}>
            フォームサンプル
          </Link>
        </p>
        <p>
          <Link to='/counter' className={styles.link}>
            カウンターサンプル
          </Link>
        </p>
      </div>

      <Outlet />
    </div>
  );
};

export default Navigation;
