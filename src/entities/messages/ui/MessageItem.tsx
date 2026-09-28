import clsx from 'clsx';
import type { MessageInterface } from '@/shared';
import AppendixSvg from './assets/Appendix.svg?react';
const MessageItem = ({ dataMessage }: { dataMessage: MessageInterface }) => {
  return (
    <div className='flex items-end'>
      {dataMessage.isOtherSender && (
        <div className='rounded-full bg-accent h-8.5 w-8.5 mr-2 mb-2 flex items-center justify-center text-xl font-bold'>
          {dataMessage.senderName && dataMessage.senderName.slice(0, 1)}
        </div>
      )}
      <article
        className={clsx(
          `px-2 py-1.25 max-w-120 min-h-8 text-base w-fit min-w-21 leading-6 text-white
    shadow-[rgba(16,16,16,0.61)_0px_1px_2px_0px] rounded-t-[15px] relative mb-2.5 break-all`,
          !dataMessage.isOtherSender
            ? 'ml-auto rounded-bl-[15px] bg-accent'
            : 'rounded-br-[15px] bg-main',
        )}
      >
        <div className='text-sm font-medium text-accent'>
          {dataMessage.senderName}
        </div>

        <AppendixSvg
          className={clsx(
            'absolute -bottom-0.75 ',
            dataMessage.isOtherSender
              ? 'rotate-y-180 fill-main -left-2'
              : 'fill-accent -right-2',
          )}
        />
        <div className='flex flex-wrap items-end relative'>
          <div className='mr-2'> {dataMessage.content}</div>
          <div className='relative text-[12px] text-white/50 -mb-1 ml-auto'>
            {dataMessage.senderAt}
          </div>
        </div>
      </article>
    </div>
  );
};

export default MessageItem;
