/**
 * A custom React hook for managing plan data.
 *
 * @returns An object containing functions for adding, editing, and deleting plans, as well as fetching plan data.
 */
import { useCallback, useState } from 'react';

import API from '../../lib/API';

export const useFetchPlansByCustomer = () => {
  const [plans, setPlans] = useState<Plan[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches a plan by its ID and sets the state accordingly.
   * @param planId - The ID of the plan to fetch.
   */
  const fetchPlan = useCallback(async (customerId: number) => {
    setIsLoading(true);
    const response = await API.get<Plan[]>(
      `/customer-plan/plan/user/${customerId}`,
    );
    if (response.status === 200) {
      setPlans(response.data);
    } else {
      setPlans(null);
    }
    setIsLoading(false);
  }, []);

  return {
    fetchPlan,
    isLoading,
    plans,
  };
};
