import React, { useState } from 'react';

import { Paper, BottomNavigation, BottomNavigationAction, Icon } from '@mui/material';
import { MdHome, MdQrCodeScanner, MdPerson } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

const BottomBar = () => {
  const [value, setValue] = useState('/');

  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: 'relative', bottom: 0, left: 0, right: 0, maxWidth: 'sm' }}
      elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(newValue);
        }}>
        <BottomNavigationAction
          label="Home"
          icon={
            <Icon>
              <MdHome />
            </Icon>
          }
          value="/"
        />
        <BottomNavigationAction
          label="Scan"
          icon={
            <Icon>
              <MdQrCodeScanner />
            </Icon>
          }
          value="/scan"
        />
        <BottomNavigationAction
          label="Profile"
          icon={
            <Icon>
              <MdPerson />
            </Icon>
          }
          value="/profile"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomBar;
