import { useCallback, useState } from 'react';

import API from '../../lib/API';

/**
 * Custom hook to fetch retailItems from the API.
 * @returns An object containing the fetched retailItems, a function to fetch the retailItems, and a boolean indicating if the fetch is in progress.
 */
export const useFetchRetailItems = () => {
  const [retailItems, setRetailItems] = useState<RetailItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches retailItems from the API and sorts them by date added.
   * If a storeId is provided, fetches only the retailItems of that store(User).
   * If a category is provided, fetches only the retailItems of that category.
   */
  const fetchRetailItems = useCallback(
    async ({
      category,
      storeId,
    }: {
      category?: RetailItemType;
      storeId?: number;
    }) => {
      if (category && storeId)
        throw new Error('Both category and userId provided');
      setIsLoading(true);
      const response = await API.get<RetailItem[]>(
        category
          ? `retailItems/category/${category}`
          : storeId
          ? `retailItems/store/${storeId}`
          : '/retailItems/all',
      );
      if (response.status === 200) {
        setRetailItems(response.data);
      } else {
        setRetailItems([]);
      }
      setIsLoading(false);
    },
    [],
  );

  return { fetchRetailItems, isLoading, retailItems };
};
