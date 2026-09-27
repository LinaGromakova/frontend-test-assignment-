import clsx from 'clsx';
import type { MessageInterface } from '@/shared';

const MessageItem = ({ dataMessage }: { dataMessage: MessageInterface }) => {
  return (
    <article
      className={clsx(
        `px-2 py-1.25 max-w-120 min-h-8 text-base w-fit min-w-21 leading-6 text-white
    shadow-[rgba(16,16,16,0.61)_0px_1px_2px_0px] rounded-t-[15px] relative mb-1.5 break-all`,
        !dataMessage.isOtherSender
          ? 'ml-auto rounded-bl-[15px] bg-accent'
          : 'rounded-br-[15px] bg-main',
      )}
    >
      {dataMessage.content}
      <svg
        width='9'
        height='20'
        className={clsx(
          'absolute -bottom-0.75 ',
          dataMessage.isOtherSender
            ? 'rotate-y-180 fill-main -left-2'
            : 'fill-accent -right-2',
        )}
      >
        <path d='M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z'></path>
        <path d='M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z'></path>
      </svg>
    </article>
  );
};

export default MessageItem;
