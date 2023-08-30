import { useEffect, useMemo, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const token = localStorage.getItem('accessToken');

function Messages() {
  const [message, setMessage] = useState<string>('');
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);

  const client = useMemo(
    () => new W3CWebSocket(`ws://localhost:8080/chat?token=${token}`),
    [],
  );

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const receivedMessage = JSON.parse(message.data.toString());
      console.log(receivedMessage);
      setReceivedMessages((prevMessages) => [
        ...prevMessages,
        receivedMessage.content,
      ]);
    };
    client.onclose = () => {
      console.log('WebSocket Connection Closed');
    };
  }, [client]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      client.send(JSON.stringify({ content: message, type: 'text' }));
      setMessage('');
    }
  };

  return (
    <div className="App">
      <div className="message-container">
        <div className="received-messages">
          <h2>Received Messages</h2>
          <ul>
            {receivedMessages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="input-container">
        <input
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          type="text"
          value={message}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Messages;
