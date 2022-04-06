import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { FaReact as ReactIcon } from 'react-icons/fa';

import Fb from 'components/Fb';
import Meta from 'components/Meta';

import useStyles from './styles';

function Welcome() {
  const matchSmallScreen = useMediaQuery('(max-width: 1200px)');
  const classes = useStyles();

  return (
    <>
      <Meta title="Welcome" description="Welcome to React PWA" />
      <Container maxWidth="sm" className="full-height">
        <Fb justifyCenter alignCenter className={classes.wrapper}>
          <Fb className={classes.iconBox}>
            <ReactIcon className={classes.icon} />
          </Fb>
          <Typography variant={matchSmallScreen ? 'h4' : 'h3'} className={classes.title}>
            React PWA
          </Typography>
        </Fb>
      </Container>
    </>
  );
}

export default Welcome;
