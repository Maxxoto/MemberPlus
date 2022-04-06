import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import { FaBrush as BrushIcon, FaRedo as RedoIcon, FaBars as MenuIcon } from 'react-icons/fa';

import Link from 'components/Link';
import Fb from 'components/Fb';
import Divider from 'components/Divider';

import useTheme from 'store/theme';
import useSW from 'store/sw';

import { title } from 'config';

import useStyles from './styles';

function AppBarComponent({ onMenuOpen }) {
  const classes = useStyles();
  const [, themeActions] = useTheme();
  const [swState, swActions] = useSW();

  function handleToggleTheme() {
    themeActions.toggle();
  }

  function handleAppUpdate() {
    swActions.update();
  }

  return (
    <AppBar position="absolute" className={classes.appBar} color="transparent" elevation={1}>
      <Toolbar className={classes.toolbar}>
        <Fb className={classes.main}>
          <IconButton edge="start" aria-label="open menu" onClick={onMenuOpen} size="large">
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Button aria-label="go to home" className={classes.title}>
              {title}
            </Button>
          </Link>
        </Fb>
        <Fb>
          {swState.isUpdated && (
            <>
              <Tooltip title="The application has newer version; press to update" arrow>
                <IconButton
                  aria-label="update the application"
                  color="secondary"
                  onClick={() => handleAppUpdate}
                  size="large">
                  <RedoIcon />
                </IconButton>
              </Tooltip>
              <Divider orientation="vertical" flexItem />
            </>
          )}
          <Tooltip title="Change theme" arrow>
            <IconButton
              aria-label="toggle theme"
              edge="end"
              onClick={() => handleToggleTheme}
              size="large">
              <BrushIcon />
            </IconButton>
          </Tooltip>
        </Fb>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
