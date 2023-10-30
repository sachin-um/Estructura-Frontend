import type { FormikHelpers, FormikProps } from 'formik';

import { Button, Container, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { Form } from 'react-router-dom';
import * as Yup from 'yup';

import { AdminAuthenticated } from '../../components/Auth/Authenticated';
import TopAppBar from '../../components/TopAppBar';
import { useAdmin } from '../../hooks/admin/useAdmin';
import GetFormikProps from '../../utils/GetFormikProps';

function AddAdmin() {
  const initialValues: Partial<RegisterRequest> = {
    assignedArea: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    assignedArea: Yup.string().required(),
    email: Yup.string().required().email(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    password: Yup.string().required(),
  });

  const FormRef = useRef<FormikProps<Partial<RegisterRequest>>>(null);

  const [adminStatusList, setAdminStatusList] = useState<boolean[]>([]);

  const {
    activateOrSuspendAccount,
    addAdmin,
    getAdmins: { admins, fetchAdmins, isLoading },
  } = useAdmin();

  useEffect(() => {
    fetchAdmins();
  }, [fetchAdmins]);

  // Toggle the enable/disable status of an admin
  const handleToggleAdminStatus = (adminId: number) => {
    const admin = admins.find((a) => a.id === adminId);
    if (admin && admin.assignedArea?.toLowerCase() !== 'super') {
      const targetStatus = admin.status === 'ACTIVE' ? 'SUSPEND' : 'ACTIVE';
      activateOrSuspendAccount(admin.id, targetStatus).then((result) => {
        if (result.success === true) {
          alert(
            `Admin: ${admin.firstName} ${admin.lastName} changed status to :${targetStatus}`,
          );
        }
      });
    }
  };

  const HandleSubmit = (values: Partial<RegisterRequest>) => {
    if (FormRef.current) {
      const { resetForm, setErrors, setSubmitting } = FormRef.current;
      setSubmitting(true);
      values.role = 'ADMIN';
      console.log(values);
      addAdmin(values).then((res) => {
        if (res.success === true) {
          alert('Admin Added');
          resetForm();
          fetchAdmins();
        } else {
          if (res.errors) {
            setErrors(res.errors);
          }
        }
      });
      setSubmitting(false);
    }
  };

  return (
    <AdminAuthenticated>
      <TopAppBar />
      <div
        style={{
          alignItems: 'center',
          backgroundImage:
            'url("https://www.decoraid.com/wp-content/uploads/2021/04/mint-green-living-room-scaled-958x575.jpeg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          paddingTop: '2rem',
        }}
      >
        <Container
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adding a semi-transparent white background
            borderRadius: '10px', // Adding rounded corners
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
            padding: '2rem',
          }}
          maxWidth="sm"
        >
          <Formik
            initialValues={initialValues}
            innerRef={FormRef}
            onSubmit={HandleSubmit}
            validationSchema={validationSchema}
          >
            {(FormikProps: FormikProps<Partial<RegisterRequest>>) => {
              const spread = GetFormikProps(FormikProps);
              return (
                <Form onSubmit={FormikProps.handleSubmit}>
                  <Typography
                    align="center"
                    component="h1"
                    sx={{ marginTop: '1rem' }}
                    variant="h4"
                  >
                    Admin
                  </Typography>
                  <TextField
                    fullWidth
                    label="First Name"
                    {...spread('firstName')}
                    margin="normal"
                    type="text"
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    {...spread('lastName')}
                    margin="normal"
                    type="text"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    {...spread('email')}
                    margin="normal"
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    margin="normal"
                    type="password"
                    {...spread('password')}
                  />
                  <TextField
                    fullWidth
                    label="Assigned Area"
                    margin="normal"
                    {...spread('assignedArea')}
                    type="text"
                  />
                  <Button color="primary" type="submit" variant="contained">
                    Add Admin
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Container>

        <Container style={{ marginTop: '2rem', width: '100%' }}>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '2rem',
            }}
          >
            <Typography gutterBottom variant="h6">
              Admin List
            </Typography>
            <div style={{ overflowX: 'auto' }}>
              {admins.length === 0 ? (
                <Typography>No admin users added yet.</Typography>
              ) : (
                <table
                  style={{
                    border: '1px solid #ddd',
                    borderCollapse: 'collapse',
                    width: '100%',
                  }}
                  // maxWidth="md"
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          backgroundColor: '#f2f2f2',
                          border: '1px solid #ddd',
                          padding: '8px',
                          textAlign: 'center',
                        }}
                      >
                        First Name
                      </th>
                      <th
                        style={{
                          border: '1px solid #ddd',
                          padding: '8px',
                          textAlign: 'center',
                        }}
                      >
                        Last Name
                      </th>
                      <th
                        style={{
                          border: '1px solid #ddd',
                          padding: '8px',
                          textAlign: 'center',
                        }}
                      >
                        Email
                      </th>
                      <th
                        style={{
                          border: '1px solid #ddd',
                          padding: '8px',
                          textAlign: 'center',
                        }}
                      >
                        Assigned Area
                      </th>
                      <th
                        style={{
                          border: '1px solid #ddd',
                          padding: '8px',
                          textAlign: 'center',
                        }}
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins.map((admin, index) => (
                      <tr key={index}>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            textAlign: 'left',
                          }}
                        >
                          {admin.firstName}
                        </td>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            textAlign: 'left',
                          }}
                        >
                          {admin.lastName}
                        </td>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            textAlign: 'left',
                          }}
                        >
                          {admin.email}
                        </td>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            textAlign: 'left',
                          }}
                        >
                          {admin.assignedArea}
                        </td>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            display: 'flex',
                            gap: '8px',
                            justifyContent: 'center',
                            padding: '8px',
                            textAlign: 'left',
                          }}
                        >
                          {/* <Button color="secondary" variant="outlined">
                            Remove
                          </Button> */}
                          {admins[index].assignedArea?.toLowerCase() !==
                            'super' && (
                            <Button
                              color={
                                admins[index].status === 'ACTIVE'
                                  ? 'secondary'
                                  : 'primary'
                              }
                              onClick={() =>
                                handleToggleAdminStatus(admins[index].id)
                              }
                              style={{ marginLeft: '0.5rem' }}
                              variant="outlined"
                            >
                              {admins[index].status === 'ACTIVE'
                                ? 'Disable'
                                : 'Enable'}
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </Container>
      </div>
    </AdminAuthenticated>
  );
}

export default AddAdmin;
