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
  value: string | number;
}

const FieldForm = ({
  label,
  config,
  onChangeHandler,
  value,
}: FieldFormPropsInterface) => {
  return (
    <label className='flex flex-col gap-1'>
      {label}
      <input
        {...config}
        className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-black px-2 py-1 rounded'
        value={value}
        onChange={onChangeHandler}
      />
    </label>
  );
};

export default FieldForm;
