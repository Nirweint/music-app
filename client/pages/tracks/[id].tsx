import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { trackAPI } from 'api';
import { baseURL } from 'api/config';
import { Path } from 'enums';
import { MainLayout } from 'layouts/MainLayout';
import { ReturnComponentType, TrackType } from 'types';

type TrackPagePropsType = {
  serverTrack: TrackType;
};

const TrackPage = ({ serverTrack }: TrackPagePropsType): ReturnComponentType => {
  const [track, setTrack] = useState<TrackType>(serverTrack);

  const router = useRouter();

  const handleToListButtonClick = (): Promise<boolean> => {
    return router.push(Path.TRACKS);
  };

  return (
    <MainLayout>
      <Button
        variant="outlined"
        sx={{ fontSize: 20, marginTop: 2 }}
        onClick={handleToListButtonClick}
      >
        Back to list
      </Button>
      <Grid container sx={{ margin: '20px 0' }}>
        <Image
          width={200}
          height={200}
          src={baseURL + track.picture}
          alt="track picture"
        />
        <div style={{ marginLeft: 30 }}>
          <h1>Track name - {track.name}</h1>
          <h1>Artist - {track.artist}</h1>
          <h1>Listens - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Track text</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container>
        <TextField label={`You're name`} fullWidth />
        <TextField
          style={{ marginTop: 10 }}
          label="Comment"
          fullWidth
          multiline
          rows={4}
        />
        <Button style={{ marginTop: 10 }}>Send comment</Button>
      </Grid>
      <div>
        {track.comments.map(({ username, text, _id }) => {
          return (
            <div key={_id}>
              <div>User - {username}</div>
              <div>Comment - {text}</div>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let data;
  if (params) {
    const response = await trackAPI.getTrack(params.id as string);
    data = response.data;
  }

  return {
    props: {
      serverTrack: data,
    },
  };
};
