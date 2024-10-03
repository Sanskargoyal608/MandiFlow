import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box'; // Correct MUI import
import Typography from '@mui/material/Typography'; // Correct MUI import
import DescriptionIcon from '@mui/icons-material/Description'; // Correct MUI Icon import
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

const Menu = () => {
  return (
    <AppProvider
      toolbarAccount={null}  
    
      navigation={[
        {
          kind: 'header',
          title: 'Animals',
        },
        {
          segment: 'lion',
          title: 'Lion',
          icon: <DescriptionIcon />,
        },
        {
          kind: 'header',
          title: 'Movies',
        },
        {
          segment: 'lord-of-the-rings',
          title: 'Lord of the Rings',
          icon: <DescriptionIcon />,
        },
      ]}
    >
      <DashboardLayout header={false}>
        
      </DashboardLayout>
    </AppProvider>
  );
};

export default Menu;
