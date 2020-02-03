import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { NavbarStyles } from './NavbarStyles';

export const Navbar: React.FC = () => {
  const classes = NavbarStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.grow} />
          <Typography variant="h3" style={{ fontWeight: 'bold' }}>
            Fantasy
          </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
