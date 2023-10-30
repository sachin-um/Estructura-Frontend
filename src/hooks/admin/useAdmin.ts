/***
 * A custom React hook for managing admin data.
 *
 * @returns An object containing functions for adding, editing, and deleting admins, as well as fetching admin data.
 */
import { useCallback, useState } from 'react';

import API from '../../lib/API';
import { violationsToErrorsTS } from '../../utils/ViolationsTS';

type Admin = User;

export const useAdmin = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches admins and sets the state accordingly.
   */
  const fetchAdmins = useCallback(async () => {
    setIsLoading(true);
    const response = await API.get<Admin[]>(`/users/all`);
    if (response.status === 200) {
      setAdmins(response.data.filter((a) => a.role === 'ADMIN'));
    } else {
      setAdmins([]);
    }
    setIsLoading(false);
  }, []);

  /**
   * Adds a new admin to the database.
   * @param adminAddRequest - The request object containing the admin data to be added.
   * @returns An object containing the result of the add operation.
   */
  const addAdmin = useCallback(
    async (adminAddRequest: Partial<RegisterRequest>) => {
      const result: AddMethodResult<Admin> = {
        errors: {},
        item: null,
        success: false,
      };
      const response = await API.post<GenericResponse & { loggedUser: User }>(
        '/admin/create-an-admin',
        adminAddRequest,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.status !== 200 || response.data.success === false) {
        if (response.status !== 200) {
          console.error('AddAdminResponse.status !== 200');
        }
        if (response.data.validation_violations) {
          result.errors = violationsToErrorsTS(
            response.data.validation_violations,
          );
        }
      } else {
        const id: number = response.data.loggedUser.id;
        result.item = (await API.get<Admin>(`/users/user/${id}`)).data;
        result.success = true;
      }
      return result;
    },
    [],
  );

  /**
   * Verify a user
   * @param userId - The ID of the user to verify.
   * @returns An object containing information about the update operation.
   */
  const verifyUser = useCallback(async (userId: number) => {
    const result: UpdateMethodResult = {
      errors: {},
      success: false,
    };
    const response = await API.put<GenericAddOrUpdateResponse>(
      `/admin/verify-user/${userId}`,
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('EditAdminResponse.status !== 200');
      }
      if (response.data.validation_violations) {
        result.errors = violationsToErrorsTS(
          response.data.validation_violations,
        );
      }
    } else {
      result.success = true;
      setAdmins(
        (await API.get<Admin[]>(`/users/all`)).data.filter(
          (u) => u.role === 'ADMIN',
        ),
      );
    }
    return result;
  }, []);

  /**
   * activate or suspend a user
   * @param  - The ID of the user to activate or suspend.
   * @returns An object containing information about the update operation.
   */
  const activateOrSuspendAccount = useCallback(
    async (userId: number, action: AccountStatus) => {
      const result: UpdateMethodResult = {
        errors: {},
        success: false,
      };
      const response = await API.put<User>(
        `/admin/handle-status/${userId}/${action}`,
      );
      if (response.status !== 200) {
        if (response.status !== 200) {
          console.error('ActiveSuspend.status !== 200');
        }
      } else {
        result.success = true;
        setAdmins(
          admins.map((u) => (u.id !== response.data.id ? u : response.data)),
        );
      }
      return result;
    },
    [admins],
  );

  return {
    activateOrSuspendAccount,
    addAdmin,
    getAdmins: {
      admins,
      fetchAdmins,
      isLoading,
    },
    verifyUser,
  };
};
