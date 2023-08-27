import { useEffect, useState } from 'react';

import API from '../../lib/API';

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user) as UserState;
      API.get<User>(`/users/user/${parsedUser.id}`).then((response) => {
        setCurrentUser(response.data);
      });
    }
  }, []);

  return currentUser;
};

export default useCurrentUser;
