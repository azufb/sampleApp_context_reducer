import { useReducer } from 'react';
import reducer from './reducer/reducer';
import { ListContext, ListDispatchContext } from '../../contexts/context';
import Form from './Form';
import List from './List';

/**
 * ListIndexコンポーネント
 * 
 * @returns {JSX.Element}
 */
const ListIndex = (): JSX.Element => {
    const [list, dispatch] = useReducer(reducer, []);

    return (
        <ListContext.Provider value={list}>
            <ListDispatchContext.Provider value={dispatch}>
                <Form />
                <List />
            </ListDispatchContext.Provider>
        </ListContext.Provider>
    );
};

export default ListIndex;