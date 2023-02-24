import { Dispatch, useContext } from 'react';
import {
  ListContext,
  ListDispatchContext,
  UserInfoContext,
} from '../../contexts/context';
import { ActionType } from '../../types/ActionType';
import { ListType } from '../../types/ListType';
import { UserInfoType } from '../../types/UserInfoType';

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
      <h2>Listコンポーネント</h2>

      <p>ユーザー名：{userInfo.userName}</p>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>タイトル</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>
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
