import { ActionType } from '../../../types/ActionType';

const reducer = (counter: number, action: ActionType) => {
  switch (action.type) {
    case 'add': {
      counter = counter + 1;

      return counter;
    }
    case 'subtract': {
      counter = counter - 1;

      return counter;
    }
    default:
      return counter;
  }
};

export default reducer;
