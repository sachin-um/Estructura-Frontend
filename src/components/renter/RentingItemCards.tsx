import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import RoomIcon from '@mui/icons-material/Room';
import StoreIcon from '@mui/icons-material/Store';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import '../../assets/font.css';

const RentingItemCards = ({
  data,
  usersInfo,
}: {
  data: RentingItem[];
  usersInfo: User[];
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      {data.map((rentingItem) => {
        const user = usersInfo?.find(
          (user) => user.id === rentingItem.createdBy,
        );
        return (
          <Card
            sx={{
              '&:hover': {
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.005)',
                transition: 'transform 0.3s ease',
              },
              background: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              display: 'flex',
              marginBottom: 2,
            }}
            key={rentingItem.id}
          >
            <div
              style={{
                height: '215px',
                margin: '5px 0px 5px 5px',
                overflow: 'hidden',
                width: '200px',
              }}
            >
              <img
                style={{
                  borderRadius: 8,
                  height: '100%',
                  objectFit: 'cover',
                  width: '100%',
                }}
                alt={rentingItem.mainImage}
                src={`http://localhost:8080/files/renting-item-files/${rentingItem.createdBy}/${rentingItem.id}/${rentingItem.mainImageName}`}
              />
            </div>

            <CardContent sx={{ flex: '1 0 auto', padding: 2 }}>
              <Typography sx={{ fontSize: 22 }} variant="h6">
                {rentingItem.name}
              </Typography>
              <Typography
                color="primary"
                gutterBottom
                sx={{ fontFamily: 'Poppins', fontSize: 18, fontWeight: 500 }}
                variant="body1"
              >
                LKR. {rentingItem.price} | {rentingItem.scale}
              </Typography>
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  marginBottom: '0.5rem',
                  marginTop: '1rem',
                }}
              >
                <PersonIcon fontSize="small" />
                <Typography
                  color="textSecondary"
                  style={{ marginLeft: '0.5rem' }}
                  variant="body2"
                >
                  {user ? user.firstName + ' ' + user.lastName : 'Unknown'}
                </Typography>
              </div>
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  marginBottom: '0.5rem',
                }}
              >
                <StoreIcon fontSize="small" />
                <Typography
                  color="textSecondary"
                  style={{ marginLeft: '0.5rem' }}
                  variant="body2"
                >
                  {user ? user.businessName ?? 'Unknown' : 'Unknown'}
                </Typography>
              </div>
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  marginBottom: '0.5rem',
                }}
              >
                <RoomIcon fontSize="small" />
                <Typography
                  color="textSecondary"
                  style={{ marginLeft: '0.5rem' }}
                  variant="body2"
                >
                  {user
                    ? (user.city ?? 'Unknown') +
                      ', ' +
                      (user.district ?? 'Unknown')
                    : 'Unknown'}
                </Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <AccessTimeIcon
                  fontSize="small"
                  style={{ marginRight: '0.5rem' }}
                />
                <Typography color="textSecondary" variant="body2">
                  {new Date(rentingItem.dateAdded).toLocaleDateString('en-US')}
                </Typography>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default RentingItemCards;
