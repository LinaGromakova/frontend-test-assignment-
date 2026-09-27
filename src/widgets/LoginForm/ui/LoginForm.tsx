import { BtnForm, FieldForm, greenApiStoreAtom } from '@/shared';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { handlerChange, handlerSubmit } from '../model/loginHandlers';
import { LOGIN_CONFIG } from './LoginForm.config';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const [valuesLogin, setValuesLogin] = useState({
    valueIdInstance: '',
    valueApiTokenInstance: '',
  });
  const setGreenApiStore = useSetAtom(greenApiStoreAtom);
  const navigate = useNavigate();
  return (
    <div className='h-dvh relative flex items-center w-full justify-center'>
      <form
        className='flex flex-col min-w-70 max-w-md bg-main px-6 pt-4 pb-4.75 rounded-4xl shadow-[rgba(16,16,16,0.61)_0px_4px_8px_2px] relative'
        action='#'
        onSubmit={(e) => {
          handlerSubmit(e, setGreenApiStore, valuesLogin);
          navigate('/');
        }}
      >
        <h3 className='text-xl font-medium leading-7.5 mb-4'>Войти</h3>
        {LOGIN_CONFIG.map((field) => {
          const currentValue = valuesLogin[field.config.name];
          return (
            <FieldForm
              key={field.config.name}
              label={field.label}
              config={field.config}
              value={currentValue}
              onChangeHandler={(e) => handlerChange(e, setValuesLogin)}
            ></FieldForm>
          );
        })}
        <div className='ml-auto'>
          <BtnForm
            isDisabled={false}
            text='Готово'
            handlerClick={() => {
              return;
            }}
          ></BtnForm>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
