import clsx from 'clsx';

interface BtnFormPropsInterface {
  className?: string;
  isDisabled: boolean;
  text: string;
  handlerClick: () => void;
}
const BtnForm = ({
  className,
  isDisabled,
  text,
  handlerClick,
}: BtnFormPropsInterface) => {
  return (
    <button
      type='submit'
      onClick={() => handlerClick()}
      className={clsx(
        'p-2 h-8 font-medium leading-4.5 text-center min-w-20 rounded-[28px] uppercase text-accent hover:bg-accent/10 focus:bg-accent/10 transition-colors disabled:opacity-50',
        className,
        isDisabled ? 'cursor-auto hover:bg-transparent' : 'cursor-pointer',
      )}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
export default BtnForm;
