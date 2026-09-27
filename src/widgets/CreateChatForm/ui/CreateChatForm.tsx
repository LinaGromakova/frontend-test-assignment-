import { BtnForm, FieldForm, phoneNumberAtom } from '@/shared';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const CreateChatForm = () => {
  const [telephoneValue, setTelephoneValue] = useState('');
  const navigate = useNavigate();
  const setPhoneNumber = useSetAtom(phoneNumberAtom);
  return (
    <form
      action='#'
      className='flex flex-col min-w-70 max-w-md bg-main px-6 pt-4 pb-4.75 rounded-4xl shadow-[rgba(16,16,16,0.61)_0px_4px_8px_2px] relative'
      onSubmit={(e) => {
        e.preventDefault();
        setPhoneNumber(telephoneValue);
        navigate('/chat');
      }}
    >
      <FieldForm
        label='Номер телефона'
        config={{ type: 'tel', name: 'telephone', pattern: '^\\d{11,15}$' }}
        onChangeHandler={(e) => setTelephoneValue(e.target.value)}
        value={telephoneValue}
      ></FieldForm>
      <BtnForm
        isDisabled={false}
        text='Создать'
      ></BtnForm>
      <BtnForm
        isDisabled={false}
        text='Отмена'
      ></BtnForm>
    </form>
  );
};
export default CreateChatForm;
