import React, { MouseEvent } from 'react';

import Pause from '@mui/icons-material/Pause';
import PlayArrow from '@mui/icons-material/PlayArrow';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import styles from 'components/player/Player.module.scss';
import { TrackProgress } from 'components/trackProgress/TrackProgress';
import { ReturnComponentType, TrackType } from 'types';

export const Player = (): ReturnComponentType => {
  const track: TrackType = {
    _id: '1',
    name: 'Trac1',
    artist: 'BTS',
    audio: '',
    comments: [],
    listens: 2,
    text: '1sadfhkj sahdfhasjkdhfjksahdjfh kajsdhf  dsj asdh fj shd kjdasfh j ahdsjkfh ksa dkf haskjdhf kjdsh j hdfj haskjd hfkasd hkjsadhkf haskj   asdhkjfasjk dhfkj ashdjkfhaskd  jash fkjhaskjd fhkadshf k ks dhfkjjash kjfhsadkj  sadh fkjsadhjkf hsadkjh fkjsadhfk jsdh fksdkf hdasjkfh kadsh fkjsadh k fhdask',
    picture: 'http://localhost:5000/image/19fc51d2-4921-41b9-b675-40628352bb54.jpg',
  };

  const active = false;

  const handleIconClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
  };

  return (
    <div className={styles.player}>
      <IconButton onClick={handleIconClick}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid container direction="column" sx={{ width: 200, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div className={styles.artist}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={() => {}} />
    </div>
  );
};
