import { useCallback, useState } from 'react';

import API from '../../lib/API';

/**
 * Custom hook to fetch rentingItems from the API.
 * @param userId Optional user ID to fetch rentingItems for a specific user.
 * @returns An object containing the fetched rentingItems, a function to fetch the rentingItems, and a boolean indicating if the fetch is in progress.
 */
export const useFetchRentingItems = () => {
  const [rentingItems, setRentingItems] = useState<RentingItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches rentingItems from the API and sorts them by date added.
   * If a userId is provided at hook level, fetches only the rentingItems of that user.
   */
  const fetchRentingItems = useCallback(
    async ({
      category,
      userId,
    }: {
      category?: RentingCategory;
      userId?: number;
    }) => {
      if (!category && !userId)
        throw new Error('No category or userId provided');
      if (category && userId)
        throw new Error('Both category and userId provided');
      setIsLoading(true);
      const response = await API.get<RentingItem[]>(
        category
          ? `renting-items/allByCategory/${category}`
          : userId
          ? `renting-items/allByUser/${userId}`
          : '/renting-items/all',
      );
      if (response.status === 200) {
        setRentingItems(response.data);
      } else {
        setRentingItems([]);
      }
      setIsLoading(false);
    },
    [],
  );

  return { fetchRentingItems, isLoading, rentingItems };
};
