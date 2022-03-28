import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';

import { TrackList } from 'components/trackList/TrackList';
import { Path } from 'enums';
import { useTypedSelector } from 'hooks';
import { MainLayout } from 'layouts/MainLayout';
import { NextThunkDispatch, wrapper } from 'store';
import { fetchTracks } from 'store/actions/track';
import { ReturnComponentType } from 'types';

const Index = (): ReturnComponentType => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector(state => state.track);

  const handleDownloadTrackClick = (): Promise<boolean> => {
    return router.push(Path.CREATE_TRACK);
  };

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card sx={{ width: '900px', marginTop: '40px' }}>
          <Box p={1}>
            <Grid container justifyContent="space-between">
              <h1>Tracks list</h1>
              <Button onClick={handleDownloadTrackClick}>Upload</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  const someDispatch = store.dispatch as NextThunkDispatch;
  await someDispatch(await fetchTracks());
});
