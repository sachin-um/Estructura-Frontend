import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import RoomIcon from '@mui/icons-material/Room';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import '../../assets/font.css'

const RentingCards = ({ data }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
      }}
    >
      {data.map((rentingItem) => (
        <Card
          key={rentingItem.id}
          sx={{
            marginBottom: 2,
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            display: 'flex',
            background: '#ffffff',
            '&:hover': {
              transform: 'scale(1.005)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          <div
            style={{
              width: '200px',
              height: '215px',
              overflow: 'hidden',
              margin: '5px 0px 5px 5px',
            }}
          >
            <img
              src={rentingItem.image}
              alt={rentingItem.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />
          </div>

          <CardContent sx={{ flex: '1 0 auto', padding: 2 }}>
            <Typography variant="h5" sx={{fontSize: 26}}>{rentingItem.name}</Typography>
            <Typography variant="body1" color="primary" gutterBottom sx={{fontSize: 20, fontFamily: 'Poppins', fontWeight: 600}}>
              LKR. {rentingItem.price} | {rentingItem.scale}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', marginTop: '1rem' }}>
              <PersonIcon fontSize="small" />
              <Typography variant="body2" color="textSecondary" style={{ marginLeft: '0.5rem' }}>
                {rentingItem.person}
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <StoreIcon fontSize="small" />
              <Typography variant="body2" color="textSecondary" style={{ marginLeft: '0.5rem' }}>
                {rentingItem.company}
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <RoomIcon fontSize="small" />
              <Typography variant="body2" color="textSecondary" style={{ marginLeft: '0.5rem' }}>
                {rentingItem.location}
              </Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <AccessTimeIcon fontSize="small" style={{ marginRight: '0.5rem' }} />
              <Typography variant="body2" color="textSecondary">
                {rentingItem.datePosted}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RentingCards;
