import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Page3() {
  const classes = useStyles();

  return (
    <>
      <Meta title="Page 3" description="Page 3" />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Page 3</Typography>
      </Container>
    </>
  );
}

export default Page3;
