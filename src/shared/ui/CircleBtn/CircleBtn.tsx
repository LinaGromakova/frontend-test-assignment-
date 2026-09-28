import clsx from 'clsx';

interface CircleBtnInterface {
  icon: React.ReactNode;
  handlerClick: () => void;
  className?: string;
  type: 'reset' | 'submit' | 'button';
}
const CircleBtn = ({
  icon,
  handlerClick,
  className,
  type,
}: CircleBtnInterface) => {
  return (
    <button
      className={clsx(
        'rounded-full bg-accent hover:bg-accent/90 cursor-pointer transition-colors flex justify-center items-center outline-0 border-0',
        className,
      )}
      type={type}
      onClick={() => handlerClick()}
    >
      {icon}
    </button>
  );
};
export default CircleBtn;
