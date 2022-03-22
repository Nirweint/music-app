import React, { FC } from 'react';

import Container from '@mui/material/Container';

import { Navbar } from 'components/navbar/Navbar';
import { ReturnComponentType } from 'types';

export const MainLayout: FC = ({ children }): ReturnComponentType => {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: '60px' }}>{children}</Container>
    </>
  );
};
