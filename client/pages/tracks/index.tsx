import React from 'react';
import {MainLayout} from "../../layouts/MainLayout";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const Index = () => {
  return (
    <MainLayout>
      <Grid container>
        <Card>
          <Grid container justifyContent='space-between'>
            <h1>Tracks list</h1>
            <Button>Download</Button>
          </Grid>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;