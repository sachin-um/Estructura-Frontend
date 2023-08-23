import { useCallback, useState } from 'react';

import API from '../../lib/API';

/**
 * Custom hook to fetch blogs from the API.
 * @param userId Optional user ID to fetch blogs for a specific user.
 * @returns An object containing the fetched blogs, a function to fetch the blogs, and a boolean indicating if the fetch is in progress.
 */
export const useFetchBlogs = (userId?: number) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches blogs from the API and sorts them by date added.
   * If a userId is provided at hook level, fetches only the blogs of that user.
   */
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
