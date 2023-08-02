import { Card, CardContent, Typography } from '@mui/material';

function Responses() {
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
  return (
    <>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography
            color="#435834"
            style={{ lineHeight: '2rem' }}
            variant="body1"
          >
            <span style={{ fontSize: '2rem', lineHeight: 'inherit' }}>
              &ldquo;
            </span>
            The heart of the design can be in seamless integration with smart
            technology. From intelligent lighting and climate control systems
            that optimize energy consumption, enabling a truly dynamic
            workplace. We can focus on incorporating biophilic elements,
            integrating greenery and natural light to create a harmonious
            environment.
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

      <Card sx={{ ...cardStyle, marginTop: '3rem' }}>
        <CardContent>
          <Typography
            color="#435834"
            style={{ lineHeight: '2rem' }}
            variant="body1"
          >
            <span style={{ fontSize: '2rem', lineHeight: 'inherit' }}>
              &ldquo;
            </span>
            The design could focus on seamlessly integrating biophilic elements
            throughout the complex to foster a deep connection betweent the
            inhabitants and the natural world. Green rooftops could adorn the
            structures which not only adds relaxation to the residents, but also
            reduce heat absorption and improve energy efficiency. Vertical
            gardens can grace the facades of the buildings while indoor-outdoor
            spaces can be incorporated into the complex&apos;s layout.
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
    </>
  );
}

export default Responses;
