import {
  BtnForm,
  FieldForm,
  phoneNumberAtom,
  showCreateChatFormAtom,
  useIsValid,
} from '@/shared';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const CreateChatForm = () => {
  const [telephoneValue, setTelephoneValue] = useState('');
  const navigate = useNavigate();
  const setPhoneNumber = useSetAtom(phoneNumberAtom);
  const setShowChatForm = useSetAtom(showCreateChatFormAtom);
  const isValid = useIsValid(
    { type: 'tel', name: 'telephone', pattern: '^\\d{11,15}$' },
    telephoneValue,
  );
  return (
    <form
      action='#'
      className='min-w-70 max-w-md bg-main px-6 pt-4 pb-4.75 rounded-4xl shadow-[rgba(16,16,16,0.61)_0px_4px_8px_2px] relative'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h3 className='text-xl font-medium leading-7.5 mb-4'>Новый контакт</h3>
      <FieldForm
        label='Номер телефона'
        config={{ type: 'tel', name: 'telephone', pattern: '^\\d{11,15}$' }}
        onChangeHandler={(e) => setTelephoneValue(e.target.value)}
        value={telephoneValue}
      ></FieldForm>
      <div className='justify-end flex gap-x-2'>
        <BtnForm
          isDisabled={!isValid}
          handlerClick={() => {
            setShowChatForm(false);
            setPhoneNumber(telephoneValue);
            navigate('/chat');
          }}
          text='Создать'
        ></BtnForm>
        <BtnForm
          isDisabled={false}
          text='Отмена'
          handlerClick={() => setShowChatForm(false)}
        ></BtnForm>
      </div>
    </form>
  );
};
export default CreateChatForm;
