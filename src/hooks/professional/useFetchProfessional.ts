import { useCallback, useState } from 'react';

import API from '../../lib/API';

const useFetchProfessionl = () => {
  const [professional, setProfessional] = useState<Professional | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserById = useCallback((userId: number) => {
    setIsLoading(true);
    API.get<Professional>(`/professionals/professional/${userId}`).then(
      (response) => {
        setProfessional(response.data);
      },
    );
    setIsLoading(false);
  }, []);

  return { fetchUserById, isLoading, professional };
};

export default useFetchProfessionl;
