const sendMessage = async (
  idInstance: string,
  apiTokenInstance: string,
  message: string,
  numberPhone: string,
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
    return result;
  } catch (error) {
    console.error('Ошибка в функции sendMessage:', error);
    throw error;
  }
};
export default sendMessage;
