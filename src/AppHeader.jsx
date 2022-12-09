import * as React from 'react';
import { AppBar, Box, Link, Typography } from '@mui/material';

function AppHeader() {
  return (
    <div className='appHeader'>
      <AppBar className='navBar'>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Exploring Motion in React
        </Typography>
        <Box sx={{ typography: 'var(--p)' }}>
          <Link underline='none' className='navitem' href='/'>Home</Link>
          <Link underline='none' className='navitem' href='/css'>CSS</Link>
          <Link underline='none' className='navitem' href='/gsap'>Greensock</Link>
        </Box>
      </AppBar>
    </div>
  );
};

export default AppHeader;