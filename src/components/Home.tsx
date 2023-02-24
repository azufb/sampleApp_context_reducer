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
      <h2 className={styles.title}>Homeコンポーネント</h2>

      <p>ユーザー名：{userInfo.userName}</p>
      <p>ユーザーID：{userInfo.userId}</p>
    </div>
  );
};

export default Home;
