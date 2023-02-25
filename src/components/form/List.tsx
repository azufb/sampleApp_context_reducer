import { Dispatch, useContext } from 'react';
import {
  ListContext,
  ListDispatchContext,
  UserInfoContext,
} from '../../contexts/context';
import { ActionType } from '../../types/ActionType';
import { ListType } from '../../types/ListType';
import { UserInfoType } from '../../types/UserInfoType';
import common from '../../styles/common/common.module.scss';
import styles from '../../styles/form/list.module.scss';

/**
 * Listコンポーネント
 * 一覧表示。
 *
 * @returns {JSX.Element}
 */
const List = (): JSX.Element => {
  const list: ListType[] = useContext(ListContext);
  const dispatch: Dispatch<ActionType> = useContext(ListDispatchContext);

  // ユーザー情報取得
  const userInfo: UserInfoType = useContext(UserInfoContext);

  /**
   * タスク削除
   *
   * @param {number} targetId
   * @returns {void}
   */
  const handleDeleteTask = (targetId: number): void => {
    dispatch({
      type: 'deleteTask',
      payload: {
        id: targetId,
      },
    });
  };

  return (
    <div>
      <h2 className={common.title}>Listコンポーネント</h2>

      <p>ユーザー名：{userInfo.userName}</p>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={`${styles.th_common} ${styles.th_id}`}>id</th>
            <th className={`${styles.th_common} ${styles.th_title}`}>
              タイトル
            </th>
            <th className={`${styles.th_common} ${styles.th_btn}`}></th>
          </tr>
        </thead>
        <tbody>
          {list.map((task) => (
            <tr key={task.id} className={styles.tr_tbody}>
              <td className={`${styles.td_common} ${styles.td_id}`}>
                {task.id}
              </td>
              <td className={styles.td_common}>{task.title}</td>
              <td className={`${styles.td_common} ${styles.td_btn}`}>
                <button onClick={() => handleDeleteTask(task.id)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
