import { BtnForm, FieldForm, greenApiStoreAtom } from '@/shared';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { handlerChange, handlerSubmit } from '../model/loginHandlers';
import { LOGIN_CONFIG } from './LoginForm.config';

const LoginForm = () => {
  const [valuesLogin, setValuesLogin] = useState({
    valueIdInstance: '',
    valueApiTokenInstance: '',
  });
  const setAtoms = useSetAtom(greenApiStoreAtom);

  return (
    <div className='h-dvh relative flex items-center'>
      <form
        action='#'
        onSubmit={(e) => handlerSubmit(e, setAtoms, valuesLogin)}
        className='flex flex-col w-1/3 h-1/3 bg-blue-900/80 mx-auto text-white'
      >
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
        <BtnForm
          isDisabled={false}
          text='Submit'
        ></BtnForm>
      </form>
    </div>
  );
};
export default LoginForm;
