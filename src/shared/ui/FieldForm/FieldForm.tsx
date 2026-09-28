import clsx from 'clsx';
import { useId } from 'react';

export interface FieldConfigInterface {
  type: string;
  min?: number;
  minLength?: number;
  maxLength?: number;
  name: string;
  pattern: string;
}
interface FieldFormPropsInterface {
  label: string;
  config: FieldConfigInterface;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const FieldForm = ({
  label,
  config,
  onChangeHandler,
  value,
}: FieldFormPropsInterface) => {
  const id = useId();
  return (
    <div className='group relative mb-4.5 group-focus-within:text-accent'>
      <input
        {...config}
        className='border border-[#5b5b5a] text-white
  autofill:shadow-[inset_0_0_0_1000px_#212121] autofill:[-webkit-text-fill-color:white]
  rounded-2xl h-12 w-full min-w-[384px] relative py-2.75 px-4.5 transition-colors outline-none group-hover:border-accent focus:border-accent focus:border-2'
        id={id}
        value={value}
        onChange={onChangeHandler}
      />
      <label
        className={clsx(
          'text-[#a2acb4] text-base absolute top-2.75 left-4.5 bg-main px transition-all group-hover:text-accent group-focus-within:text-accent group-focus-within:-translate-y-5 group-focus-within:scale-75 origin-top-left',
          value.trim() && 'scale-75 -translate-y-5',
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default FieldForm;
