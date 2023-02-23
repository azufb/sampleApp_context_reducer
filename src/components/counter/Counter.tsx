import { useContext } from 'react';
import { CounterContext, CounterDispatchContext } from '../../contexts/context';

/**
 * Counterコンポーネント
 * 加算/減算処理を行う。
 * 
 * @returns {JSX.Element}
 */
const Counter = (): JSX.Element => {
    // useContextで、stateを取得。
    const currentCount: number = useContext(CounterContext);
    // 一旦anyで逃げた。
    const dispatch: any = useContext(CounterDispatchContext);

    /**
     * 加算
     * 
     * @returns {void}
     */
    const handleCounterAdd = (): void => {
        dispatch({
            type: 'add'
        });
    };

    /**
     * 減算
     * 
     * @returns {void}
     */
    const handleCounterSub = (): void => {
        dispatch({
            type: 'subtract'
        });
    };

    return (
        <div>
            <h2>Counterコンポーネント</h2>

            <div>
                <button onClick={handleCounterAdd}>+</button>
                <span>{currentCount}</span>
                <button onClick={handleCounterSub}>-</button>
            </div>
        </div>
    );
};

export default Counter;