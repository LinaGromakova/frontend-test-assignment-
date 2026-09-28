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
    const time = new Date().toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setMessage((prev) => [
      ...prev,
      {
        messageId: result.idMessage,
        content: message,
        isOtherSender: false,
        senderAt: time,
      },
    ]);
    return result;
  } catch (error) {
    console.error('Ошибка в функции sendMessage:', error);
    throw error;
  }
};
export default sendMessage;
