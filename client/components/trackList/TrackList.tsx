import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { TrackItem } from 'components/trackList/trackItem/TrackItem';
import { ReturnComponentType, TrackType } from 'types';

type TrackListPropsType = {
  tracks: TrackType[];
};

export const TrackList = ({ tracks }: TrackListPropsType): ReturnComponentType => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map(track => {
          return <TrackItem key={track._id} track={track} />;
        })}
      </Box>
    </Grid>
  );
};
