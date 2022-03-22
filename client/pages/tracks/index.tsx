import React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import { MainLayout } from 'layouts/MainLayout';
import { ReturnComponentType } from 'types';

const Index = (): ReturnComponentType => {
  return (
    <MainLayout>
      <Grid container>
        <Card>
          <Grid container justifyContent="space-between">
            <h1>Tracks list</h1>
            <Button>Download</Button>
          </Grid>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
