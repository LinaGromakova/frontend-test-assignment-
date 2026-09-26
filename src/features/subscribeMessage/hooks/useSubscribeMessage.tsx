import { messagesAtom } from '@/entities';
import { greenApiStoreAtom } from '@/shared';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';

const useSubscribeMessage = () => {
  const { idInstance, apiTokenInstance } = useAtomValue(greenApiStoreAtom);
  const setMessage = useSetAtom(messagesAtom);

  useEffect(() => {
    if (!idInstance || !apiTokenInstance) return;
    let isMounted = true;
    let controller: AbortController | null = null;
    const startPolling = async () => {
      const seconds = 20;
       const receiveUrl = `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=${seconds}`;
      while (isMounted) {
        try {
          controller = new AbortController();
          const response = await fetch(receiveUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
              Accept: 'application/json',
            },
            signal: controller.signal,
          });
          if (!response.ok) {
            await new Promise((resolve) => setTimeout(resolve, 5000));
            continue;
          }
          const notification = await response.json();
          if (!notification) {
            continue;
          }
          const { receiptId, body } = notification;
          console.log(body);
          if (body.typeWebhook === 'incomingMessageReceived') {
            const textMessage = body.messageData.textMessageData?.textMessage;
            console.log(textMessage);
            if (textMessage) {
              setMessage((prev) => [
                ...prev,
                {
                  content: textMessage,
                  messageId: body.idMessage,
                  isOtherSender: true,
                },
              ]);
            }
          }
          const deleteUrl = `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`;
          await fetch(deleteUrl, { method: 'DELETE' });
        } catch (error) {
          console.error('Ошибка Long Polling:', error);
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
      }
    };
    startPolling();
    return () => {
      isMounted = false;
      if (controller) controller.abort();
    };
  }, [idInstance, apiTokenInstance]);
};
export default useSubscribeMessage;
