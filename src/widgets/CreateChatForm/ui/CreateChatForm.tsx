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
      onSubmit={(e) => {
        e.preventDefault();
        setPhoneNumber(telephoneValue);
        navigate('/chat');
      }}
    >
      <FieldForm
        label='Telephone number your friend'
        config={{ type: 'tel', name: 'telephone', pattern: '^\\d{11,15}$' }}
        onChangeHandler={(e) => setTelephoneValue(e.target.value)}
        value={telephoneValue}
      ></FieldForm>
      <BtnForm
        isDisabled={false}
        text='Create'
      ></BtnForm>
    </form>
  );
};
export default CreateChatForm;
