import * as React from 'react';
import { AppBar, Box, Link, Typography } from '@mui/material';

function AppHeader() {
  return (
    <div>
      <AppBar className='navBar' sx={{ 
        position: 'sticky',
        marginBottom:' 1rem', 
        flexFlow: 'row nowrap',
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '0.5rem 2rem',
        backgroundColor: 'blue',
        width: '100vw'
      }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Motion in React
        </Typography>
        <Box sx={{ typography: 'body1' }}>
          <Link underline='none' className='navitem' href='/'>Home</Link>
          <Link underline='none' className='navitem' href='/css'>CSS</Link>
          <Link underline='none' className='navitem' href='/gsap'>Greensock</Link>
        </Box>
      </AppBar>
    </div>
  );
};

export default AppHeader;