import { Dispatch, useContext } from 'react';
import { ListContext, ListDispatchContext } from '../../contexts/context';
import { ActionType } from '../../types/ActionType';

/**
 * Listコンポーネント
 * 一覧表示。
 * 
 * @returns {JSX.Element}
 */
const List = (): JSX.Element => {
    const list: any[] = useContext(ListContext);
    const dispatch: Dispatch<ActionType> = useContext(ListDispatchContext);

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
                id: targetId
            }
        });
    };

    return (
        <div>
            <h2>Listコンポーネント</h2>

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