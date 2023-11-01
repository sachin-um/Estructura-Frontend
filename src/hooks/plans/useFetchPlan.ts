/**
 * A custom React hook for managing plan data.
 *
 * @returns An object containing functions for adding, editing, and deleting plans, as well as fetching plan data.
 */
import { useCallback, useState } from 'react';

import API from '../../lib/API';

export const useFetchPlan = () => {
  const [plan, setPlan] = useState<Plan | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches a plan by its ID and sets the state accordingly.
   * @param planId - The ID of the plan to fetch.
   */
  const fetchPlan = useCallback(async (planId: number) => {
    setIsLoading(true);
    const response = await API.get<Plan>(`/customer-plan/plan/${planId}`);
    if (response.status === 200) {
      setPlan(response.data);
    } else {
      setPlan(null);
    }
    setIsLoading(false);
  }, []);

  return {
    fetchPlan,
    isLoading,
    plan,
  };
};
