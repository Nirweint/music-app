export type CommentType = {
  _id: string;
  username: string;
  text: string;
};

export type TrackType = {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: CommentType[];
};

export type TrackStateType = {
  tracks: TrackType[];
  error: string;
};

export enum TrackActionTypes {
  FETCH_TRACKS = 'trackReducer/FETCH_TRACKS',
  FETCH_TRACKS_ERROR = 'trackReducer/FETCH_TRACKS_ERROR',
}

type FetchTracksAction = {
  type: TrackActionTypes.FETCH_TRACKS;
  payload: TrackType[];
};

type FetchTracksErrorAction = {
  type: TrackActionTypes.FETCH_TRACKS_ERROR;
  payload: string;
};

export type TrackAction = FetchTracksAction | FetchTracksErrorAction;
