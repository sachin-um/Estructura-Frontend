import { useCallback, useState } from 'react';

import API from '../../lib/API';

const useMessages = () => {
  const [messageList, setMessageList] = useState<Message[] | null>(null);

  /**
   * Fetches messages by the sender's token and the recipientId and sets the state accordingly.
   * @param recipientId - The ID of the recipient to fetch.
   */
  const fetchMessages = useCallback(async (recipientId: number | undefined) => {
    console.log('fetching');
    const token = localStorage.getItem('accessToken');
    try {
      const response = await API.get<Message[]>(
        recipientId
          ? `/messages?token=${token}&to=${recipientId}`
          : `/messages/all?token=${token}`,
      );
      if (response.status === 200) {
        setMessageList(() =>
          response.data.sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          ),
        );
      }
    } catch (error) {}
  }, []);

  /**
   * Send a message to a user
   * returns the response since result will be auto fetched
   */
  const sendMessage = useCallback(
    async (recipientId: number, request: SendMessageRequest) => {
      const token = localStorage.getItem('accessToken');
      const response = await API.post<GenericAddOrUpdateResponse>(
        `/messages?token=${token}&to=${recipientId}`,
        request,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response;
    },
    [],
  );

  const seen = useCallback(async (messageId: number) => {
    const token = localStorage.getItem('accessToken');
    await API.post(
      `/messages/seen?token=${token}&msg=${messageId}`,
      {
        messageId,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  }, []);

  return { fetchMessages, messageList, seen, sendMessage };
};

export default useMessages;
