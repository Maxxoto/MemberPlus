import React from 'react';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';

import { Link as RouterLink } from 'react-router-dom';

import withStyles from '@mui/styles/withStyles';

import {
  FaHome as WelcomeIcon,
  FaJsSquare as JSIcon,
  FaReact as ReactIcon,
  FaGithub as GithubIcon,
  FaBug as BugIcon
} from 'react-icons/fa';

import isMobile from 'utils/isMobile';

import useStyles from './styles';

const StyledMenuItem = withStyles({ root: { width: '100%' } })((props) => <MenuItem {...props} />);

function Menu({ isOpen, onClose, onOpen }) {
  const classes = useStyles({
    isOpen,
    isMobile
  });

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      swipeAreaWidth={30}
      disableBackdropTransition>
      <List className={classes.list}>
        <div className={classes.toolbar} />
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/">
          <ListItemIcon>
            <WelcomeIcon />
          </ListItemIcon>
          <ListItemText primary="Welcome" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-1">
          <ListItemIcon>
            <JSIcon />
          </ListItemIcon>
          <ListItemText primary="Page 1" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-2">
          <ListItemIcon>
            <ReactIcon />
          </ListItemIcon>
          <ListItemText primary="Page 2" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-3">
          <ListItemIcon>
            <GithubIcon />
          </ListItemIcon>
          <ListItemText primary="Page 3" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-4">
          <ListItemIcon>
            <BugIcon />
          </ListItemIcon>
          <ListItemText primary="Page 4" />
        </StyledMenuItem>
      </List>
    </SwipeableDrawer>
  );
}

export default Menu;
