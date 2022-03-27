import { TrackType } from 'types/track';

export type PlayerStateType = {
  active: null | TrackType;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
};

export enum PlayerActionTypes {
  PLAY = 'playerReducer/PLAY',
  PAUSE = 'playerReducer/PAUSE',
  SET_ACTIVE = 'playerReducer/SET_ACTIVE',
  SET_DURATION = 'playerReducer/SET_DURATION',
  SET_CURRENT_TIME = 'playerReducer/SET_CURRENT_TIME',
  SET_VOLUME = 'playerReducer/SET_VOLUME',
}

type PlayAction = {
  type: PlayerActionTypes.PLAY;
};
type PauseAction = {
  type: PlayerActionTypes.PAUSE;
};
type SetActiveAction = {
  type: PlayerActionTypes.SET_ACTIVE;
  payload: TrackType;
};
type SetDurationAction = {
  type: PlayerActionTypes.SET_DURATION;
  payload: number;
};
type SetCurrentTimeAction = {
  type: PlayerActionTypes.SET_CURRENT_TIME;
  payload: number;
};
type SetVolumeAction = {
  type: PlayerActionTypes.SET_VOLUME;
  payload: number;
};

export type PlayerAction =
  | PlayAction
  | PauseAction
  | SetActiveAction
  | SetDurationAction
  | SetCurrentTimeAction
  | SetVolumeAction;
