import { Grid, Typography } from '@mui/material';

function Messages() {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get('email'), formData.get('password'));
  };

  return (
    <>
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '10rem',
          marginTop: '3rem',
        }}
      >
        <Typography variant="h6"> Messages</Typography>
      </Grid>
    </>
  );
}

export default Messages;
