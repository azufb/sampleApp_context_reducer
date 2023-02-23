import { useContext } from 'react';
import { CounterContext, UserInfoContext } from '../../contexts/context';
import { UserInfoType } from '../../types/UserInfoType';

/**
 * CurrentCounterコンポーネント
 * 現在のstateを表示するだけ。
 * 
 * @returns {JSX.Element}
 */
const CurrentCounter = (): JSX.Element => {
    const currentCount: number = useContext(CounterContext);

    // ユーザー情報取得
    const userInfo: UserInfoType = useContext(UserInfoContext);

    return (
        <div>
            <h2>CurrentCounterコンポーネント</h2>

            <p>ユーザー名：{userInfo.userName}</p>
            <p>現在のcountの状態は、{currentCount}です。</p>
        </div>
    );
};

export default CurrentCounter;