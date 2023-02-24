import { useReducer } from 'react';
import reducer from './reducer/reducer';
import { CounterContext, CounterDispatchContext } from '../../contexts/context';
import Counter from './Counter';
import CurrentCounter from './CurrentCounter';

/**
 * CounterIndexコンポーネント
 *
 * @returns {JSX.Element}
 */
const CounterIndex = (): JSX.Element => {
  // 初期値は0
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <CounterContext.Provider value={counter}>
      <CounterDispatchContext.Provider value={dispatch}>
        <Counter />
        <CurrentCounter />
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

export default CounterIndex;
