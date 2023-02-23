import { useForm } from 'react-hook-form';

type FormInputDataType = {
    textInput: string;
};

const Form = () => {
    const { register, handleSubmit, reset } = useForm<FormInputDataType>();

    const handleSubmitText = (data: FormInputDataType) => {
        console.log(data);

        reset();
    };

    return (
        <div>
            <h2>Formコンポーネント</h2>

            <form onSubmit={handleSubmit(handleSubmitText)}>
                <label htmlFor='textInput'>テキスト：</label>
                <input id='textInput' {...register('textInput')} />
                <button type='submit'>送信</button>
            </form>
        </div>
    );
};

export default Form;