import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';
import useMessages from '../../hooks/messages/useMessages';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import useFetchAllUsers from '../../hooks/users/useFetchAllUsers';

// Not Tested
const AllMessagesInbox = () => {
  const lol = false;
  const { fetchMessages, messageList } = useMessages();
  const { fetchAllUsers, users } = useFetchAllUsers();
  const currentUser = useCurrentUser();

  const [inboxes, setInboxes] = useState<
    { count: number; recipient: User | undefined }[]
  >([]);

  const fetcher = useCallback(() => {
    fetchMessages(undefined);
  }, [fetchMessages]);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  useEffect(() => {
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lol]);

  useEffect(() => {
    console.log(users, messageList);
  }, [users, messageList]);

  useEffect(() => {
    setTimeout(fetcher, 10000);
  });

  useEffect(() => {
    const userIds = new Set();
    messageList
      ?.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      )
      .forEach((message) => {
        userIds.add(
          message.senderId === currentUser?.id
            ? message.recipientId
            : message.senderId,
        );
      });
    const toUpdate: { count: number; recipient: User | undefined }[] = [];
    userIds.forEach((userId) => {
      toUpdate.push({
        count:
          messageList?.filter(
            (m) =>
              (m.recipientId === userId || m.senderId === userId) && !m.seen,
          ).length ?? 0,
        recipient: users.find((u) => u.id === userId),
      });
    });
    console.log(toUpdate);
    setInboxes(toUpdate);
  }, [currentUser?.id, messageList, users]);

  return (
    <>
      <TopAppBar />
      <h1>Inbox</h1>
      <div className="inbox">
        {inboxes.map((inbox) => (
          <div className="message-box" key={inbox.recipient?.id}>
            UserName: {inbox.recipient?.firstName} {inbox.recipient?.lastName} (
            {inbox.count})<Link to={`/chat/${inbox.recipient?.id}`}>Chat</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllMessagesInbox;
