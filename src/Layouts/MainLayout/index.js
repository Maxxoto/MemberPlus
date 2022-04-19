import React from 'react';

import Content from 'sections/Content';

import AppBar from 'components/AppBar';
import BottomBar from 'components/BottomBar';
// import Notifications from 'sections/Notifications';

import Fb from 'components/Fb';
import useStyles from './styles';

function Layout() {
  const classes = useStyles();

  return (
    <>
      {/* <Notifications /> */}
      <AppBar />
      <Fb className={classes.wrapper}>
        <Fb column justifyBetween className={classes.content}>
          <Content />
        </Fb>
      </Fb>
      <BottomBar />
    </>
  );
}

export default Layout;
