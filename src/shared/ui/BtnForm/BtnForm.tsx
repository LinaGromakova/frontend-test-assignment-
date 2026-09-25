import clsx from 'clsx';

interface BtnFormPropsInterface {
  className?: string;
  isDisabled: boolean;
  text: string;
}
const BtnForm = ({ className, isDisabled, text }: BtnFormPropsInterface) => {
  return (
    <button
      type='submit'
      className={clsx('cursor-pointer', className)}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
export default BtnForm;
