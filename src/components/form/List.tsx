import { Dispatch, useContext } from 'react';
import {
  ListContext,
  ListDispatchContext,
  UserInfoContext,
} from '../../contexts/context';
import { ActionType } from '../../types/ActionType';
import { ListType } from '../../types/ListType';
import { UserInfoType } from '../../types/UserInfoType';
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
      <h2 className={styles.title}>Listコンポーネント</h2>

      <p>ユーザー名：{userInfo.userName}</p>

      <table className={styles.listTable}>
        <thead className={styles.thead}>
          <tr>
            <th className={`${styles.commonTh} ${styles.idTh}`}>id</th>
            <th className={`${styles.commonTh} ${styles.titleTh}`}>タイトル</th>
            <th className={`${styles.commonTh} ${styles.deleteBtnTh}`}></th>
          </tr>
        </thead>
        <tbody>
          {list.map((task) => (
            <tr key={task.id} className={styles.tbodyTr}>
              <td className={`${styles.commonTd} ${styles.idTd}`}>{task.id}</td>
              <td className={styles.commonTd}>{task.title}</td>
              <td className={`${styles.commonTd} ${styles.deleteBtnTd}`}>
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
