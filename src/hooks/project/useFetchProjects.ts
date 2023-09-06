import { useCallback, useState } from 'react';

import API from '../../lib/API';

/**
 * Custom hook to fetch projects from the API.
 * @returns An object containing the fetched projects, a function to fetch the projects, and a boolean indicating if the fetch is in progress.
 */
export const useFetchProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches projects from the API.
   * Fetches only the projects of the specified user.
   */
  const fetchProjects = useCallback(async (userId: number) => {
    setIsLoading(true);
    const response = await API.get<Project[]>(`projects/all/${userId}`);
    if (response.status === 200) {
      setProjects(response.data);
    } else {
      setProjects([]);
    }
    setIsLoading(false);
  }, []);

  return { fetchProjects, isLoading, projects };
};
