import { useCallback, useState } from 'react';

import API from '../../lib/API';

const useFetchAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllUsers = useCallback(async () => {
    setIsLoading(true);
    const response = await API.get<User[]>('/users/all');
    if (response.status === 200) {
      setUsers(response.data);
    } else {
      setUsers([]);
    }
    setIsLoading(false);
  }, []);

  return { fetchAllUsers, isLoading, users };
};

export default useFetchAllUsers;
