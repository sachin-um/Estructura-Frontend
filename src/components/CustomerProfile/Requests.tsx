import { Card, CardContent, Typography } from '@mui/material';
import { useEffect } from 'react';

import { useFetchCustomerRequests } from '../../hooks/customerRequest/useFetchCustomerRequests';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import Loading from '../../pages/loading';

function Requests() {
  const cardStyle = {
    '&:hover': {
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transform: 'scale(1.05)',
    },
    marginTop: '2rem',
    transition: 'transform 0.2s, box-shadow 0.2s',
    width: '90%',
  };

  const { customerRequests, fetchCustomerRequests, isLoading } =
    useFetchCustomerRequests();

  const currentUser = useCurrentUser();

  useEffect(() => {
    fetchCustomerRequests({
      customerId: currentUser?.id,
    });
  });

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {customerRequests.map((req) => (
        <Card key={req.id} sx={{ ...cardStyle, marginTop: '3rem' }}>
          <CardContent>
            <Typography
              color="#435834"
              style={{ lineHeight: '2rem' }}
              variant="body1"
            >
              <span style={{ fontSize: '2rem', lineHeight: 'inherit' }}>
                &ldquo;
              </span>
              The design could focus on seamlessly integrating biophilic
              elements throughout the complex to foster a deep connection
              between the inhabitants and the natural world. Green rooftops
              could adorn the structures which not only adds relaxation to the
              residents, but also reduce heat absorption and improve energy
              efficiency. Vertical gardens can grace the facades of the
              buildings while indoor-outdoor spaces can be incorporated into the
              complex&apso;s layout.
              <span
                style={{
                  fontSize: '2rem',
                  lineHeight: '1',
                  marginLeft: '0.5rem',
                }}
              >
                &rdquo;
              </span>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Requests;
