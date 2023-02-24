import { Dispatch, useContext } from 'react';
import { ActionType } from '../../types/ActionType';
import { useForm } from 'react-hook-form';
import { ListDispatchContext } from '../../contexts/context';

type FormInputDataType = {
  textInput: string;
};

/**
 * Formコンポーネント
 *
 * @returns {JSX.Element}
 */
const Form = (): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<FormInputDataType>();
  const dispatch: Dispatch<ActionType> = useContext(ListDispatchContext);

  /**
   * タスク追加
   *
   * @param {FormInputDataType} data
   * @returns {void}
   */
  const handleSubmitText = (data: FormInputDataType): void => {
    console.log(data);

    dispatch({
      type: 'addTask',
      payload: {
        title: data.textInput,
      },
    });

    reset();
  };

  return (
    <div>
      <h2>Formコンポーネント</h2>

      <form onSubmit={handleSubmit(handleSubmitText)}>
        <label htmlFor='textInput'>タスク：</label>
        <input id='textInput' {...register('textInput')} />
        <button type='submit'>追加</button>
      </form>
    </div>
  );
};

export default Form;
