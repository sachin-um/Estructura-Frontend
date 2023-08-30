import { useCallback, useState } from 'react';

import API from '../../lib/API';

const useFetchAllProfessionals = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllProfessionals = useCallback(async () => {
    setIsLoading(true);
    const response = await API.get<Professional[]>('/professionals/all');
    if (response.status === 200) {
      setProfessionals(response.data);
    } else {
      setProfessionals([]);
    }
    setIsLoading(false);
  }, []);
  return { fetchAllProfessionals, isLoading, professionals };
};

export default useFetchAllProfessionals;