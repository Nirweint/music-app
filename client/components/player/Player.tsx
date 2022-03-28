import React, { ChangeEvent, useEffect } from 'react';

import Pause from '@mui/icons-material/Pause';
import PlayArrow from '@mui/icons-material/PlayArrow';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import styles from 'components/player/Player.module.scss';
import { TrackProgress } from 'components/trackProgress/TrackProgress';
import { useActions, useTypedSelector } from 'hooks';
import { ReturnComponentType } from 'types';

const PROCENT = 100;
let audio: HTMLAudioElement;

export const Player = (): ReturnComponentType => {
  const { active, pause, duration, currentTime, volume } = useTypedSelector(
    state => state.player,
  );
  const { playTrack, pauseTrack, setVolume, setCurrentTime, setDuration } = useActions();

  const setAudio = (): void => {
    if (active) {
      audio.src = active.audio;
      audio.volume = +(volume / PROCENT).toFixed(1);
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  const handlePlayClick = (): void => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    audio.volume = +(Number(e.target.value) / PROCENT).toFixed(1);
    setVolume(Number(e.target.value));
  };

  const handleCurrentTimeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    audio.currentTime = +e.target.value;
    setVolume(Number(e.target.value));
  };

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      handlePlayClick();
    }
  }, [active]);

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={handlePlayClick}>
        {!pause ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid container direction="column" sx={{ width: 200, margin: '0 20px' }}>
        <div>{active?.name}</div>
        <div className={styles.artist}>{active?.artist}</div>
      </Grid>
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={handleCurrentTimeChange}
      />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={volume} right={100} onChange={handleVolumeChange} />
    </div>
  );
};
