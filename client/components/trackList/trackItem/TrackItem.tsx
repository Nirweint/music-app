import React, { MouseEvent } from 'react';

import Delete from '@mui/icons-material/Delete';
import Pause from '@mui/icons-material/Pause';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Card from '@mui/material/Card';

import styles from '/components/trackList/trackItem/TrackItem.module.scss';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { baseURL } from 'api/config';
import { Path } from 'enums';
import { useActions } from 'hooks';
import { ReturnComponentType, TrackType } from 'types';

type TrackItemPropsType = {
  track: TrackType;
  active?: boolean;
};

export const TrackItem = ({
  track,
  active = false,
}: TrackItemPropsType): ReturnComponentType => {
  const router = useRouter();
  const { playTrack, setActiveTrack } = useActions();

  const { picture, name, artist, _id } = track;

  const handleTrackCardClick = (): Promise<boolean> => {
    return router.push(Path.TRACKS + '/' + _id);
  };

  const handlePlayIconClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  };

  const handleDeleteIconClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
  };

  return (
    <Card className={styles.track} onClick={handleTrackCardClick}>
      <IconButton onClick={handlePlayIconClick}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Image width={70} height={70} src={baseURL + picture} alt="track picture" />
      <Grid container direction="column" sx={{ width: 200, margin: '0 20px' }}>
        <div>{name}</div>
        <div className={styles.artist}>{artist}</div>
      </Grid>
      {active && <div>02:33 / 03:44</div>}
      <IconButton onClick={handleDeleteIconClick} sx={{ marginLeft: 'auto' }}>
        <Delete />
      </IconButton>
    </Card>
  );
};
