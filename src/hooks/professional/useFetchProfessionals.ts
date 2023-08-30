import { useCallback, useState } from 'react';

import API from '../../lib/API';

export const useFetchAllProfessionals = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllProfessionals = useCallback(async (role?: Role) => {
    setIsLoading(true);
    const response = await API.get<Professional[]>(
      role ? `professionals/all/${role}` : '/professionals/all',
    );
    if (response.status === 200) {
      setProfessionals(response.data);
    } else {
      setProfessionals([]);
    }
    setIsLoading(false);
  }, []);
  return { fetchAllProfessionals, isLoading, professionals };
};
