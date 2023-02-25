import { useContext } from 'react';
import { UserInfoContext } from '../contexts/context';
import { UserInfoType } from '../types/UserInfoType';
import styles from '../styles/home.module.scss';

/**
 * Homeコンポーネント
 *
 * @returns {JSX.Element}
 */
const Home = (): JSX.Element => {
  const userInfo: UserInfoType = useContext(UserInfoContext);

  return (
    <div>
      <h2>Home</h2>

      <h2 className={styles.title}>Homeコンポーネント</h2>

      <p className={styles.userName}>ユーザー名：{userInfo.userName}</p>
      <p className={styles.userId}>ユーザーID：{userInfo.userId}</p>
      <p className={styles.annotation}>
        ※ユーザー名とユーザーIDは仮の情報です。
      </p>
    </div>
  );
};

export default Home;
