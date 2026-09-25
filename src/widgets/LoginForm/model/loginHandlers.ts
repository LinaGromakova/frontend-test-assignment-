import React from 'react';

interface LoginValuesInterface {
  valueIdInstance: string;
  valueApiTokenInstance: string;
}

export const handlerChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<LoginValuesInterface>>,
) => {
  const { name, value } = e.target;
  setState((prev) => ({
    ...prev,
    [name]: value,
  }));
};
interface GreenApiStoreInterface {
  idInstance: string;
  apiTokenInstance: string;
}
export const handlerSubmit = (
  e: React.SubmitEvent<HTMLFormElement>,
  setAtom: (update: GreenApiStoreInterface) => void,
  values: LoginValuesInterface,
) => {
  e.preventDefault();
  if (
    values.valueIdInstance.trim() !== '' &&
    values.valueApiTokenInstance.trim() !== ''
  ) {
    setAtom({
      idInstance: values.valueIdInstance,
      apiTokenInstance: values.valueApiTokenInstance,
    });
  }
};
