import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
// import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';

// import { FaRedo as RedoIcon } from 'react-icons/fa';
import { MdOutlineNotifications } from 'react-icons/md';

import Link from 'components/Link';
// import Fb from 'components/Fb';
// import Divider from 'components/Divider';

// import useSW from 'store/sw';

const AppBarComponent = () => {
  // const [swState, swActions] = useSW();

  // const handleAppUpdate = () => {
  //   swActions.update();
  // };

  return (
    <AppBar
      sx={{
        margin: 'auto',
        left: 'auto !important',
        right: 'auto !important',
        maxWidth: 'sm',
        position: 'relative'
      }}
      color="transparent"
      elevation={0}>
      <Toolbar sx={{ 'justify-content': 'space-between' }}>
        <Link to="/">
          <Button aria-label="go to home" sx={{ fontWeight: 100, color: '#000' }}>
            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Member +</span>
          </Button>
        </Link>
        <MdOutlineNotifications style={{ width: '24px', height: '24px' }} />
        {/* <Fb>
          {swState.isUpdated && (
            <>
              <Tooltip title="The application has newer version; press to update" arrow>
                <IconButton
                  aria-label="update the application"
                  color="secondary"
                  onClick={handleAppUpdate}
                  size="large">
                  <RedoIcon />
                </IconButton>
              </Tooltip>
              <Divider orientation="vertical" flexItem />
            </>
          )}
        </Fb> */}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
