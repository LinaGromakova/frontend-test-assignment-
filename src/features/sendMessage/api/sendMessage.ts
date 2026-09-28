import type { MessageInterface } from '@/shared';

const sendMessage = async (
  idInstance: string,
  apiTokenInstance: string,
  message: string,
  numberPhone: string,
  setMessage: React.Dispatch<React.SetStateAction<MessageInterface[]>>,
) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
  const payload = {
    chatId: `${numberPhone}@c.us`,
    message: message,
  };

  const time = new Date().toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const tempId = `temp-${Date.now()}`;

  setMessage((prev) => [
    ...prev,
    {
      messageId: tempId,
      content: message,
      isOtherSender: false,
      senderAt: time,
      status: 'loading',
    },
  ]);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Ошибка сервера: ${response.status}`);
    }
    const result = await response.json();
    setMessage((prev) =>
      prev.map((msg) =>
        msg.messageId === tempId
          ? { ...msg, messageId: result.idMessage, status: 'success' }
          : msg,
      ),
    );
    return result;
  } catch (error) {
    console.error('Ошибка в функции sendMessage:', error);
    setMessage((prev) =>
      prev.map((msg) =>
        msg.messageId === tempId ? { ...msg, status: 'error' } : msg,
      ),
    );
    throw error;
  }
};

export default sendMessage;
