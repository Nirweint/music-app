import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';

import { TrackList } from 'components/trackList/TrackList';
import { Path } from 'enums';
import { MainLayout } from 'layouts/MainLayout';
import { ReturnComponentType, TrackType } from 'types';

const Index = (): ReturnComponentType => {
  const router = useRouter();

  const tracks: TrackType[] = [
    {
      _id: '1',
      name: 'Trac1',
      artist: 'BTS',
      audio: '',
      comments: [],
      listens: 2,
      text: '1',
      picture: 'http://localhost:5000/image/19fc51d2-4921-41b9-b675-40628352bb54.jpg',
    },
    {
      _id: '2',
      name: 'Trac2',
      artist: 'Ed Sheeran',
      audio: '',
      comments: [],
      listens: 2,
      text: '1',
      picture: 'http://localhost:5000/image/19fc51d2-4921-41b9-b675-40628352bb54.jpg',
    },
    {
      _id: '3',
      name: 'Trac3',
      artist: 'Sofi',
      audio: '',
      comments: [],
      listens: 2,
      text: '1',
      picture: 'http://localhost:5000/image/19fc51d2-4921-41b9-b675-40628352bb54.jpg',
    },
  ];

  const handleDownloadTrackClick = (): Promise<boolean> => {
    return router.push(Path.CREATE_TRACK);
  };

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
