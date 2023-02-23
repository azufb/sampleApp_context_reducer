import { ActionType } from '../../../types/ActionType';
import { ListType } from '../../../types/ListType';

type PayloadType = {
    id: number;
    title: string;
}

const reducer = (list: ListType[], action: ActionType<PayloadType>): ListType[] => {
    switch (action.type) {
        case ('addTask'): {
            // 割り当てるidを用意
            let id: number | undefined = undefined;
            if (list.length === 0) {
                id = 1;
            } else {
                id = list.length + 1;
            };

            // タスク追加
            let taskTitle: string | undefined = undefined;
            if (action.payload) {
                taskTitle = action.payload.title;

                const newTaskObj: ListType = {
                    id,
                    title: taskTitle
                };
    
                list = [
                    ...list,
                    newTaskObj
                ];
            };

            return list;
        }
        case ('deleteTask'): {
            if (action.payload) {
                const targetId: number = action.payload.id;

                const filteredList = list.filter((task) => {
                    return task.id !== targetId;
                });

                list = filteredList;
            }

            return list;
        }
        default:
            return list;
    }
};

export default reducer;