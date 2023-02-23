import { useContext } from 'react';
import { CounterContext } from '../../contexts/context';

/**
 * CurrentCounterコンポーネント
 * 現在のstateを表示するだけ。
 * 
 * @returns {JSX.Element}
 */
const CurrentCounter = (): JSX.Element => {
    const currentCount: number = useContext(CounterContext);

    return (
        <div>
            <h2>CurrentCounterコンポーネント</h2>

            <p>現在のcountの状態は、{currentCount}です。</p>
        </div>
    );
};

export default CurrentCounter;