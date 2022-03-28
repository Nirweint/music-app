import { TrackAction, TrackActionTypes, TrackStateType } from 'types';

const initialState: TrackStateType = {
  tracks: [],
  error: '',
};

export const trackReducer = (
  state = initialState,
  action: TrackAction,
): TrackStateType => {
  switch (action.type) {
    case TrackActionTypes.FETCH_TRACKS:
      return { ...state, tracks: action.payload, error: '' };
    case TrackActionTypes.FETCH_TRACKS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
