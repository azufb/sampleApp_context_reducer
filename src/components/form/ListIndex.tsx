import { useReducer } from 'react';
import reducer from './reducer/reducer';
import { ListContext, ListDispatchContext } from '../../contexts/context';
import Form from './Form';
import List from './List';
import styles from '../../styles/form/listIndex.module.scss';

/**
 * ListIndexコンポーネント
 *
 * @returns {JSX.Element}
 */
const ListIndex = (): JSX.Element => {
  // 初期値は空配列
  const [list, dispatch] = useReducer(reducer, []);

  return (
    <div className={styles.base}>
      <h2>フォーム</h2>

      <ListContext.Provider value={list}>
        <ListDispatchContext.Provider value={dispatch}>
          <Form />
          <List />
        </ListDispatchContext.Provider>
      </ListContext.Provider>
    </div>
  );
};

export default ListIndex;
