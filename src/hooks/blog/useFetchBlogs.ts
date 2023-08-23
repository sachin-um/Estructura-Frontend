import { useCallback, useState } from 'react';

import API from '../../lib/API';

export const useFetchBlogs = (userId?: number) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
    const response = await API.get<Blog[]>(
      userId ? `blogs/all/${userId}` : '/blogs/all',
    );
    if (response.status === 200) {
      const sortedBlogs = response.data.sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
      );
      setBlogs(sortedBlogs);
    } else {
      setBlogs([]);
    }
    setIsLoading(false);
  }, [userId]);

  return { blogs, fetchBlogs, isLoading };
};
