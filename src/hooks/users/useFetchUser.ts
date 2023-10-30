import { useCallback, useState } from 'react';

import API from '../../lib/API';

const useFetchUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserById = useCallback((userId: number) => {
    setIsLoading(true);
    API.get<User>(`/users/user/${userId}`).then((response) => {
      setUser(response.data);
    });
    setIsLoading(false);
  }, []);

  return { fetchUserById, isLoading, user };
};

export default useFetchUser;
