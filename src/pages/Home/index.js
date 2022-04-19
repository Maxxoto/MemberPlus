import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Fb from 'components/Fb';
import Meta from 'components/Meta';

import { useSnackbar } from 'notistack';

function Home() {
  const { enqueueSnackbar } = useSnackbar();
  const handleClick = () => {
    enqueueSnackbar('I love hooks');
  };
  return (
    <>
      <Meta title="Welcome" description="Home" />
      <Container className="base">
        <Fb justifyCenter alignCenter column className="base">
          <Typography>Home</Typography>
          <Button onClick={handleClick}>Show snackbar</Button>
        </Fb>
      </Container>
    </>
  );
}

export default Home;
